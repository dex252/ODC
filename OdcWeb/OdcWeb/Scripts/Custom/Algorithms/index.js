import 'shared/common';
import {AlgorithmsDirector} from './algorithms-director';
import 'styles/Custom/Algorithms/index.css';

const ALGORITHM_DIRECTOR = new AlgorithmsDirector();

$(async ()  => {
    await ALGORITHM_DIRECTOR.InitEvents();
    await ALGORITHM_DIRECTOR.Init();
});