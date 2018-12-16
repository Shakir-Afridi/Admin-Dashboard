
export function updateRenderedComp(comp) {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_RENDERED_COMP',
            payload: comp
        })
    }
}