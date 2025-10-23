import { ValidatorFn } from "@angular/forms";


export function emailValidator(domains: string[]): ValidatorFn {
    const domainStr = domains.join('|');
    const regEx = new RegExp(`[A-Za-z0-9]{6,}+@gmail.(${domainStr})`);

    return (control) => {
        console.log({ control });
        
        return null;
    }; 
}