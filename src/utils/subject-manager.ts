
import { Subject } from 'rxjs';

// Canal de comunicación entre componentes
export class SubjectManager {
    subject$ = new Subject();

    // Suscribirse a un valor
    getSubject(): any {
        return this.subject$.asObservable();
    }

    // Emitir un valor
    // eslint-disable-next-line accessor-pairs
    setSubject(value: any) {
        this.subject$.next(value);
    }
}
