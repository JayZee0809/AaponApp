import { DummyCategoryLoader } from './Loader-Card';
import './Loader.scss';

export const Loader = () => {
    return (
        <>
            <DummyCategoryLoader key={0}/>
            <DummyCategoryLoader key={1}/>
            <DummyCategoryLoader key={2}/>
            <DummyCategoryLoader key={3}/>
        </>
    )
}