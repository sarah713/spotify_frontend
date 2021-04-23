export const initialState={
    user:null,
    playLists:[],
    playing:false,
    item:null,
    token:"BQA6Pn_url97X-uGNIcWsQ1_JSeU8BZw6o_z_8tjWrarH6NdyjiCgT-ov8U0YfARmE2XXuXrB8CFuftFtd9c15N5BMPG7-M_OrEZ5E8AapnY2VPVKPxEsGDFC2w-dgQQ9M6J4rrddUq-zTRn7FKw2D0pJSQ2ZkmBPhLBiib3v9fazhnB"
};

const reducer = (state,action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
            case "SET_PLAYLISTS":
                return{
                    ...state,
                    playLists:action.playLists,
                }
            case "SET_DISCOVER_WEEKLY":
                return{
                    ...state,
                    discover_weekly:action.discover_weekly
                }
        default:
            return state;
    }
}
export default reducer;