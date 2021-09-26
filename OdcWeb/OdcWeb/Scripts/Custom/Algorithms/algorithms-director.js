import { Algorithm } from "./models";
import {showSpinner, hideSpinner} from '../../Shared/spinner';
import {renderErrorMessage, renderError} from '../../Shared/errors';
import { Guid } from 'js-guid';

const WorldMap = require("world-map");

const container = $('#content');
const ALGORITHM_LIST_TAMPLATE = '#list-template';

const ALGORITHMS_SELECT = '#algorithm-list';
const ALGORITHM_DESCRIPTION ='#description';
const ALGORITHM_DESCRIPTION_TAMPLATE = '#description-template';

const INPUT_PARAMS ='#params';
const INPUT_PARAMS_TEMPLATE ='#params-template';

const LIST_ADD_BUTTON = '.list-add-button';
const LIST_REMOVE_BUTTON = '.list-remove-button';
const LIST_ITEM_TEMPLATE = '#list-item-template';

const SAVE_BUTTON = '#save-button';

export class AlgorithmsDirector{
    constructor(){  
        this.AlgorithmsList = undefined;
        this.CurrentAlgorithm = undefined;
        this.ActiveMapContainer = undefined;
        this.WorldMapsId = [];
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

            this.CurrentAlgorithm = data.Data[0];

            await this.SetCurrentAlgorithm();
        } catch(error){
            renderError(error);
        } finally{
            hideSpinner();
        }
    }

    InitEvents(){
        let DIRECTOR = this;

        $(document).on('change', ALGORITHMS_SELECT, async (e) =>{
            let target = e.currentTarget;
            let guid = target.options[target.selectedIndex].id;

            let selected = DIRECTOR.AlgorithmsList.filter(e => e.Guid === guid);

            if(selected.length !== 1){
                renderErrorMessage('Выбранный алгоритм не определен');
                return;
            }

            DIRECTOR.CurrentAlgorithm = selected[0];

            await DIRECTOR.SetCurrentAlgorithm();
        });

        $(document).on('click', LIST_ADD_BUTTON, (e) =>{
            let target = $(e.currentTarget);
            let container = target.data('target');
            let guid = Guid.newGuid();
            let item = {Id: guid}

            let template =  $(LIST_ITEM_TEMPLATE).render(item);
            var html = new DOMParser().parseFromString(template, "text/html").querySelector(`#list-${guid}`);
            $(container).append(html)
        });

        $(document).on('click', LIST_REMOVE_BUTTON, (e) =>{
            let target = $(e.currentTarget);
            let container = target.data('target');

            $(container).remove();
        });

        $(document).on('click', SAVE_BUTTON, (e) =>{
            //TODO: обновить данные в модели
            DIRECTOR.UpdateValues();
            //TODO: сохранить значения на сервере
            DIRECTOR.SaveValues();
        });

        $(window).on('resize', (e) =>{
            if(!DIRECTOR.ActiveMapContainer){
                return;
            }

            this.WorldMapsId.forEach(e => DIRECTOR.SetWorldMapParametres(e));
        });
    }

    UpdateValues(){
        //....
    }

    SaveValues(){
        //....
    }

    async SetCurrentAlgorithm(){
        let descriptionContainer = $(ALGORITHM_DESCRIPTION);
        descriptionContainer.empty();
        descriptionContainer.html(
            $(ALGORITHM_DESCRIPTION_TAMPLATE).render(this.CurrentAlgorithm)
        );

        let data = await this.GetInputParams(this.CurrentAlgorithm.Guid);

        let paramsContainer = $(INPUT_PARAMS);
        paramsContainer.empty();
        paramsContainer.html(
            $(INPUT_PARAMS_TEMPLATE).render(data)
        );

        this.InitWorldMapAttributes(data.Params);
    }

    InitWorldMapAttributes(params){
        this.ActiveMapContainer = undefined;
        this.WorldMapsId = [];

        let maps = params.filter(e => e.Type == 'MAP');

        if(maps.length == 0){
            return;
        }

        this.SetResizeWorldMapContainer(maps[0]);

        for (let attr of maps){
            let id = `world-map-${attr.Id}`;
            this.WorldMapsId.push(id);

            this.SetWorldMapParametres(id);
        }
    }

    SetResizeWorldMapContainer(map){
        this.ActiveMapContainer = $(`#world-map-${map.Id}`);
    }

    SetWorldMapParametres(id){
        $(`#${id}`).empty();

        let mapParametres ={
            width: this.ActiveMapContainer.innerWidth(),
            zoom: true,
            landsColor: '#008282',
            landsBorder: '#fff',
        };

        var map = new WorldMap(id , mapParametres);
    }

    /**
     * 
     * @param {string} guid 
     * @param {string} version 
     * @returns {Promise<Algorithm[]>}
     */
         async GetInputParams(guid){
            return new Promise(async (resolve, reject) => {
                $.ajax({
                    url: '../Algorithms/GetInputParams',
                    type: 'get',
                    data: {guid: guid},
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
    
                        resolve(response.Data);
                    }
                });
    
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