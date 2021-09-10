const actions = {
    changeShelf: function(id, shelfNo) {
        return{
            type: 'CHANGE_SHELF',
            id: id,
            shelfNo: shelfNo,
        }
    },

    showAll: function(){
        return{
            type: 'SHOW_ALL'
        }
    },
}

export default actions;