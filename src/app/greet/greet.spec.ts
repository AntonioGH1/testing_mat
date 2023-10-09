import {greet} from './greet';

describe('greet', () => {
    it('Should include a name in the message', () => {
        
        expect(greet('mosh')).toContain('mosh');
    })
    
})
