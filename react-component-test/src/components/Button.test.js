import { render } from "@testing-library/react";
import Button from './Button';

describe('Button 컴포넌트 (@testing-library/react)', () => {
    it('컴포넌트가 정상적으로 생성된다', () => {
        render(<Button />);
    });
});
