import { IArea } from "libs/mhn-store/src/lib/area/area.model"
import { IDragonArea } from "libs/mhn-store/src/lib/dragon-area/dragon-area.model"
import { IDragon } from "libs/mhn-store/src/lib/dragon/dragon.model"

export const originalAreaList: IArea[] = [
    {
        id: 'a01',
        name: '森林',
    },
    {
        id: 'a02',
        name: '沙漠',
    }, {
        id: 'a03',
        name: '沼地',
    }
]

export const originalDragonList: IDragon[] = [
    {
        id: 'd01',
        name: '大凶豺龍',
        equipageBaseId: 'd01eb'
    },
    {
        id: 'd02',
        name: '搔鳥',
        equipageBaseId: 'd02eb'
    }, {
        id: 'd03',
        name: '毒妖鳥',
        equipageBaseId: 'd03eb'
    }, {
        id: 'd04',
        name: '水妖鳥',
        equipageBaseId: 'd04eb'
    }, {
        id: 'd05',
        name: '土砂龍',
        equipageBaseId: 'd05eb'
    }, {
        id: 'd06',
        name: '大凶顎龍',
        equipageBaseId: 'd06eb'
    }, {
        id: 'd07',
        name: '飛雷龍',
        equipageBaseId: 'd07eb'
    }, {
        id: 'd08',
        name: '浮空龍',
        equipageBaseId: 'd08eb'
    }, {
        id: 'd09',
        name: '泥魚龍',
        equipageBaseId: 'd09eb'
    }, {
        id: 'd10',
        name: '蠻顎龍',
        equipageBaseId: 'd10eb'
    }, {
        id: 'd11',
        name: '雌火龍',
        equipageBaseId: 'd11eb'
    }, {
        id: 'd12',
        name: '櫻火龍',
        equipageBaseId: 'd12eb'
    },
    {
        id: 'd13',
        name: '風漂龍',
        equipageBaseId: 'd13eb'
    },
    {
        id: 'd14',
        name: '角龍',
        equipageBaseId: 'd14eb'
    },
    {
        id: 'd15',
        name: '黑角龍',
        equipageBaseId: 'd15eb'
    }, {
        id: 'd16',
        name: '火龍',
        equipageBaseId: 'd16eb'
    }, {
        id: 'd17',
        name: '蒼火龍',
        equipageBaseId: 'd17eb'
    }, {
        id: 'd18',
        name: '骨鎚龍',
        equipageBaseId: 'd18eb'
    }, {
        id: 'd19',
        name: '猛牛龍',
        equipageBaseId: 'd19eb'
    }, {
        id: 'd20',
        name: '冰牙龍',
        equipageBaseId: 'd20eb'
    }, {
        id: 'd21',
        name: '雷狼龍',
        equipageBaseId: 'd21eb'
    }, {
        id: 'd22',
        name: '眩鳥',
        equipageBaseId: 'd22eb'
    }, {
        id: 'd23',
        name: '慘爪龍',
        equipageBaseId: 'd23eb'
    }, {
        id: 'd24',
        name: '恐暴龍',
        equipageBaseId: 'd24eb'
    },
    // {
    //     id:'d25',
    //     name:''
    // },{
    //     id:'d26',
    //     name:''
    // },{
    //     id:'d27',
    //     name:''
    // },{
    //     id:'d28',
    //     name:''
    // },{
    //     id:'d29',
    //     name:''
    // },{
    //     id:'d30',
    //     name:''
    // },{
    //     id:'d31',
    //     name:''
    // },{
    //     id:'d32',
    //     name:''
    // },{
    //     id:'d33',
    //     name:''
    // },
]

export const originalDragonaAreaList: IDragonArea[] = [
    // 大凶
    {
        id: 'd01a01',
        areaId: 'a01',
        dragonId: 'd01',
    },
    {
        id: 'd01a02',
        areaId: 'a02',
        dragonId: 'd01',
    }, {
        id: 'd01a03',
        areaId: 'a03',
        dragonId: 'd01',
    },
    // 搔鳥
    {
        id: 'd02a01',
        areaId: 'a01',
        dragonId: 'd02',
    },
    {
        id: 'd02a02',
        areaId: 'a02',
        dragonId: 'd02',
    }, {
        id: 'd02a03',
        areaId: 'a03',
        dragonId: 'd02',
    },

    //     id: 'd03',
    //     name: '毒妖鳥'
    {
        id: 'd03a01',
        areaId: 'a01',
        dragonId: 'd03',
    },
    {
        id: 'd03a02',
        areaId: 'a02',
        dragonId: 'd03',
    }, {
        id: 'd03a03',
        areaId: 'a03',
        dragonId: 'd03',
    },
    //     id: 'd04',
    //     name: '水妖鳥'
    {
        id: 'd04a01',
        areaId: 'a01',
        dragonId: 'd04',
    }, {
        id: 'd04a03',
        areaId: 'a03',
        dragonId: 'd04',
    },
    //     id: 'd05',
    //     name: '土砂龍'
    {
        id: 'd05a02',
        areaId: 'a02',
        dragonId: 'd05',
    }, {
        id: 'd05a03',
        areaId: 'a03',
        dragonId: 'd05',
    },
    //     id: 'd06',
    //     name: '大凶顎龍'
    {
        id: 'd06a01',
        areaId: 'a01',
        dragonId: 'd06',
    }, {
        id: 'd06a03',
        areaId: 'a03',
        dragonId: 'd06',
    },
    //     id: 'd07',
    //     name: '飛雷龍'
    {
        id: 'd07a01',
        areaId: 'a01',
        dragonId: 'd07',
    }, {
        id: 'd07a03',
        areaId: 'a03',
        dragonId: 'd07',
    },

    //     id: 'd08',
    //     name: '浮空龍'
    {
        id: 'd08a02',
        areaId: 'a02',
        dragonId: 'd08',
    }, {
        id: 'd08a03',
        areaId: 'a03',
        dragonId: 'd08',
    },

    //     id: 'd09',
    //     name: '泥魚龍'
    {
        id: 'd09a03',
        areaId: 'a03',
        dragonId: 'd09',
    },

    //     id: 'd10',
    //     name: '蠻顎龍'
    {
        id: 'd10a01',
        areaId: 'a01',
        dragonId: 'd10',
    },
    {
        id: 'd10a02',
        areaId: 'a02',
        dragonId: 'd10',
    },

    //     id: 'd11',
    //     name: '雌火龍'
    {
        id: 'd11a01',
        areaId: 'a01',
        dragonId: 'd11',
    },
    {
        id: 'd11a02',
        areaId: 'a02',
        dragonId: 'd11',
    },

    //     id: 'd12',
    //     name: '櫻火龍'
    {
        id: 'd12a01',
        areaId: 'a01',
        dragonId: 'd12',
    },

    //     id: 'd13',
    //     name: '風漂龍'
    {
        id: 'd13a03',
        areaId: 'a03',
        dragonId: 'd13',
    },

    //     id: 'd14',
    //     name: '角龍'
    {
        id: 'd14a02',
        areaId: 'a02',
        dragonId: 'd14',
    },

    //     id: 'd15',
    //     name: '黑角龍'
    {
        id: 'd15a02',
        areaId: 'a02',
        dragonId: 'd15',
    },

    //     id: 'd16',
    //     name: '火龍'
    {
        id: 'd16a01',
        areaId: 'a01',
        dragonId: 'd16',
    },

    //     id: 'd17',
    //     name: '蒼火龍'
    {
        id: 'd17a01',
        areaId: 'a01',
        dragonId: 'd17',
    },

    //     id: 'd18',
    //     name: '骨鎚龍'
    {
        id: 'd18a02',
        areaId: 'a02',
        dragonId: 'd18',
    }, {
        id: 'd18a03',
        areaId: 'a03',
        dragonId: 'd18',
    },

    //     id: 'd19',
    //     name: '猛牛龍'
    {
        id: 'd19a01',
        areaId: 'a01',
        dragonId: 'd19',
    }, {
        id: 'd10a03',
        areaId: 'a03',
        dragonId: 'd19',
    },

    //     id: 'd20',
    //     name: '冰牙龍'
    {
        id: 'd20a01',
        areaId: 'a01',
        dragonId: 'd20',
    },

    //     id: 'd21',
    //     name: '雷狼龍'
    {
        id: 'd21a01',
        areaId: 'a01',
        dragonId: 'd21',
    }, {
        id: 'd10a03',
        areaId: 'a03',
        dragonId: 'd21',
    },

    //     id: 'd22',
    //     name: '眩鳥'
    {
        id: 'd22a02',
        areaId: 'a02',
        dragonId: 'd22',
    }, {
        id: 'd22a03',
        areaId: 'a03',
        dragonId: 'd22',
    },

    //     id: 'd23',
    //     name: '慘爪龍'
    {
        id: 'd23a02',
        areaId: 'a02',
        dragonId: 'd23',
    }, {
        id: 'd23a03',
        areaId: 'a03',
        dragonId: 'd23',
    },

    //     id: 'd24',
    //     name: '恐暴龍'
    {
        id: 'd24a01',
        areaId: 'a01',
        dragonId: 'd24',
    },
    {
        id: 'd24a02',
        areaId: 'a02',
        dragonId: 'd24',
    }, {
        id: 'd24a03',
        areaId: 'a03',
        dragonId: 'd24',
    }
]







// {
//     id:'d25',
//     name:''
// },{
//     id:'d26',
//     name:''
// },{
//     id:'d27',
//     name:''
// },{
//     id:'d28',
//     name:''
// },{
//     id:'d29',
//     name:''
// },{
//     id:'d30',
//     name:''
// },{
//     id:'d31',
//     name:''
// },{
//     id:'d32',
//     name:''
// },{
//     id:'d33',
//     name:''
// },
