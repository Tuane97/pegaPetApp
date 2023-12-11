import React, { useEffect, useState } from 'react';
import './cardPopUp.style.css';
import { UserType } from '../../../utils/enums/userType.enum';
import { INFO_PROCESS_VISIT } from '../../../constants';
import { useVisitApi } from '../../../hooks/api/visit/use-visit.hooks';
import { StatusVisit } from '../../../utils/enums/statusVisit.enum';
import { useNavigate } from 'react-router-dom';
import { setNextStepVisitAcepted, setNextStepVisitRefused } from '../../../utils/setNextStepVisit';
import { StatusProcess } from '../../../utils/enums/statusProcess.enum';
import { useProcessAdoptApi } from '../../../hooks/api/processAdopt/use-process.hooks';

const CardPopup = ({info, userType, type}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputInfo, setInputInfo] = useState(INFO_PROCESS_VISIT);
  const navigate = useNavigate()
  const isOng = userType === UserType.ONG
  const isAdopter = userType === UserType.ADOTANTE
  const visitApi = useVisitApi()
  const processApi = useProcessAdoptApi()

  useEffect(()=>{
    if(type === "visita"){
      setInputInfo({status: info?.status, observation:info?.visita.observacao})
    } else {
      setInputInfo({status: info?.status, observation:info?.detalhes})
    }
  }, [info])

  const textButtonAcepted = {
    'SOLICITADA': 'Aceitar',
    'AGENDADA': 'Aprovar',
    'APROVADA': 'Aprovar',
    'CANCELADA': 'Aceitar',
    'REPROVADA': 'Aprovar'
  }

  const textButtonRefuse = {
    'SOLICITADA': 'Recusar',
    'AGENDADA': 'Reprovar',
    'APROVADA': 'Reprovar',
    'CANCELADA': 'Recusar',
    'REPROVADA': 'Reprovar'
  }

  const buttonDisable = info.visita.status == StatusVisit.CANCELADA || info.visita.status == StatusVisit.REPROVADA || info.visita.status == StatusVisit.APROVADA

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAcceptedVisit = async () => {
    let {status, observation} = inputInfo
    status = setNextStepVisitAcepted(info.visita)
    console.log(status, observation)
    const visitId = info.visita.id
    await visitApi.edit(visitId, status, observation)
    togglePopup()    
    navigate("/myProcess",)

  };

  const handleRefusedVisit = async () => {
    let {status, observation} = inputInfo
    status = setNextStepVisitRefused(info.visita)
    const visitId = info.visita.id
    console.log(status, observation)
    await visitApi.edit(visitId, status, observation)
    togglePopup()
    navigate("/myProcess")
  };

  const handleAcceptedProcess = async () => {
    let {status, observation} = inputInfo
    status = StatusProcess.APROVADA
    console.log(status, observation)
    await processApi.edit(info.id, status, observation)
    togglePopup()    
    navigate("/myProcess",)

  };

  const handleRefusedProcess = async () => {
    let {status, observation} = inputInfo
    status = StatusProcess.REPROVADA
    console.log(status, observation)
    await processApi.edit(info.id, status, observation)
    togglePopup()
    navigate("/myProcess")
  };

  const handleChange = (event) => {
    setInputInfo({...info, observation: event.target.value})
    // setStatus(e.target.value);
  };

  console.log("info", info);
  console.log("userType", userType);
  console.log("type", type);

  const obsDefault = "Não há nenhuma observação"


  if(type==="visita"){
    return (
    
      <div className="card-container">
        <button className="button-open-popup" onClick={togglePopup}>Visualizar</button>
  
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Informações</h2>
              <p>Data: {info?.visita?.data}</p>
              <p>Hora: {info?.visita?.hora}</p>
              <p>Status: {info?.visita?.status}</p>
              {isOng && <>
                <div>
                  <button disabled={buttonDisable} onClick={handleAcceptedVisit}>{textButtonAcepted[info.visita.status]}</button>
                  <button disabled={buttonDisable} onClick={handleRefusedVisit}>{textButtonRefuse[info.visita.status]}</button>
                </div>
                <form>
                  <label>Observação: <textarea disabled={buttonDisable} onChange={handleChange} type="text" name='observation' value={inputInfo.observation || ""} />
                  </label>
                </form>
              </>}
              {isAdopter && 
                <>
                  <button disabled={buttonDisable} onClick={handleRefusedVisit}>Cancelar</button>
                  <p>Observação: {info?.visita?.observacao || obsDefault}.</p>
                </>
              }
              
              <button onClick={togglePopup}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if(type==="detalhes"){
    return (
    
      <div className="card-container">
        <button className="button-open-popup" onClick={togglePopup}>Detalhes</button>
  
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Informações</h2>
              <p>Visita: {info?.visita?.status}</p>
              <p>Status do Processo: {info?.status}</p>
              {isOng &&
                <>
                  <div>
                    <button disabled={info.status !== StatusProcess.AGUARDANDO_APROVACAO} onClick={handleAcceptedProcess}>Aprovar</button>
                    <button disabled={info.status !== StatusProcess.AGUARDANDO_APROVACAO} onClick={handleRefusedProcess}>Reprovar</button>
                  </div>
                  <form>
                    <label>Observação: <textarea disabled={info.status !== StatusProcess.AGUARDANDO_APROVACAO} onChange={handleChange} type="text" name='observation' value={inputInfo.observation || ""} />
                    </label>
                  </form>
                </>
              }
              {isAdopter && 
                <>
                  <button disabled={info.status !== StatusProcess.AGUARDANDO_APROVACAO} onClick={handleRefusedProcess}>Cancelar</button>
                  <p>Observação: {info?.visita?.observacao || obsDefault}.</p>
                </>
              }
              
              <button onClick={togglePopup}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
};

export default CardPopup;