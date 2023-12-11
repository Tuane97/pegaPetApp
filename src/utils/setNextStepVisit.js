import { StatusVisit } from "./enums/statusVisit.enum";

export const setNextStepVisitAcepted = (visit) => {

    switch(true){
        case visit.status === StatusVisit.SOLICITADA: return StatusVisit.AGENDADA
        case visit.status === StatusVisit.AGENDADA: return StatusVisit.APROVADA
    }
}

export const setNextStepVisitRefused = (visit) => {

    switch(true){
        case visit.status === StatusVisit.SOLICITADA: return StatusVisit.CANCELADA
        case visit.status === StatusVisit.AGENDADA: return StatusVisit.REPROVADA
    }
}