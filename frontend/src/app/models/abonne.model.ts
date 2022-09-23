import { Operateur } from './operateur.model';
export class Abonne {
    constructor(
        public id ?: string,
        public nom ?: string,
        public prenom ?: string,
        public mail ?: string,
        public numero ?: number,
        public operateurId ?: string,
        public operateur ?: Operateur
    ){}
}
