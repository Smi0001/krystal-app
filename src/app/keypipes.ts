import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(srcObj, args: string[]): any {
        // console.log(srcObj, 'srcObj');
        const keys = [];
        for (const [key, value] of Object.entries(srcObj)) {
            keys.push(key);
        }
        // console.log(keys);
        return keys;
    }
}
