import { Algorithm } from "./models";
import {showSpinner, hideSpinner} from '../../Shared/spinner';
import {renderErrorMessage, renderError} from '../../Shared/errors';

const container = $('#content');
const ALGORITHM_LIST_TAMPLATE = '#list-template';

const ALGORITHMS_SELECT = '#algorithm-list';
const ALGORITHM_DESCRIPTION ='#description';
const ALGORITHM_DESCRIPTION_TAMPLATE = '#description-template';

export class AlgorithmsDirector{
    constructor(){
        this.AlgorithmsList = undefined;
        this.CurrentAlgorithm = undefined;
    }

    async Init(){
        try{
            showSpinner();
            let data = await this.GetAlgorithms();
            this.AlgorithmsList = data.Data;
            
            container.empty();
            container.html(
                $(ALGORITHM_LIST_TAMPLATE).render(data)
            );

            $(ALGORITHMS_SELECT).trigger( "change" );

        } catch(error){
            renderError(error);
        } finally{
            hideSpinner();
        }
    }

    InitEvents(){
        let DIRECTOR = this;

        $(document).on('change', ALGORITHMS_SELECT, (e)=>{
            let target = e.currentTarget;
            let guid = target.options[target.selectedIndex].id;

            let selected = DIRECTOR.AlgorithmsList.filter(e => e.Guid === guid);

            if(selected.length !== 1){
                renderErrorMessage('Выбранный алгоритм не определен');
                return;
            }

            DIRECTOR.CurrentAlgorithm = selected[0];

            let descriptionContainer = $(ALGORITHM_DESCRIPTION);
            descriptionContainer.empty();
            descriptionContainer.html(
                $(ALGORITHM_DESCRIPTION_TAMPLATE).render(DIRECTOR.CurrentAlgorithm)
            );
        });
    }

    /**
     * 
     * @param {string} guid 
     * @param {string} version 
     * @returns {Promise<Algorithm[]>}
     */
    async GetAlgorithms(guid, version){
        return new Promise(async (resolve, reject) => {
            $.ajax({
                url: '../Algorithms/GetAlgorithms',
                type: 'get',
                data: {guid: guid, version: version},
                cache: false,
                contentType: "application/json; charset=utf-8",
                error: error => {
                    reject(error);
                },
                success: response => {
                    console.info((response));
                    if(response.Status != 'ok'){
                        reject(response);
                    }

                    resolve({Data: response.Data});
                }
            });

        });
    }
}