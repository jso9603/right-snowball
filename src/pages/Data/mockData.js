const topic = {
    title: '',
    content: '',
    snow_cnt_total: '??',
    products: []
}

const product = {
    title: '',
    img_src: '',
    alters: [],
    search: '옥시'      //[]
}

const alter = {
    title: '',
    img_src: '',
    snow_count: 0
}

const snows = {
    snows: [
        {
            title: '에코 후레쉬 곰팡이 제거제',
            origin_price : '14,500',
            sale_price: '9,000',
            snow_cnt: 11255,
            img_src: 'https://eco-fresh.co.kr/web/product/medium/201905/04f714e1c35cf486d8099cea49aea0fc.jpg',
        },
        {
            title: '에코트리즈 곰팡이 제거제',
            origin_price : '8,280',
            sale_price: '',
            snow_cnt: 124,
            img_src: 'https://ecotrees.co.kr/web/product/big/201707/23_shop1_407611.jpg',
        },
        {
            title: '닥터데이즈 곰팡이 제거제',
            origin_price : '22,000',
            sale_price: '',
            snow_cnt: 421,
            img_src: 'http://www.dailygrid.net/news/photo/201902/122722_94528_529.jpg',
        }
    ]
};

const mock = {
    topic: [
        {
            id: 1,
            title: '첫번째 토픽',
            content: '첫번째 토픽 내용',
            snow_cnt_total: '??',
            products: [
                {
                    title: '첫번째 토픽의 첫번째 제품',
                    img_src: '',
                    alters: [
                        {
                            title: '첫번째 토픽의 첫번째 제품 첫번째 대체재',
                            img_src: '',
                            snow_count: 0
                        },
                        {
                            title: '첫번째 토픽의 첫번째 제품 두번째 대체재',
                            img_src: '',
                            snow_count: 0
                        },
                        {
                            title: '첫번째 토픽의 첫번째 제품 세번째 대체재',
                            img_src: '',
                            snow_count: 0
                        }
                    ],
                    search: '옥시'      //[]
                },
                {
                    title: '첫번째 토픽의 두번째 제품',
                    img_src: '',
                    alters: [,
                        {
                            title: '첫번째 토픽의 두번째 제품 첫번째 대체재',
                            img_src: '',
                            snow_count: 0
                        },
                        {
                            title: '첫번째 토픽의 두번째 제품 두번째 대체재',
                            img_src: '',
                            snow_count: 0
                        }
                    ],
                    search: '옥시'      //[]
                },
                {
                    title: '첫번째 토픽의 세번째 제품',
                    img_src: '',
                    alters: [
                        {
                            title: '첫번째 토픽의 세번째 제품 첫번째 대체재',
                            img_src: '',
                            snow_count: 0
                        },
                        {
                            title: '첫번째 토픽의 세번째 제품 두번째 대체재',
                            img_src: '',
                            snow_count: 0
                        }
                    ],
                    search: '옥시'      //[]
                }
            ]
        },
        {
            id: 2,
            title: '두번째 토픽',
            content: '두번째 토픽 내용',
            snow_cnt_total: '??',
            products: [
                {
                    title: '첫번째 토픽 첫번째 제품',
                    img_src: '',
                    alters: [
                        {
                            title: '첫번째 토픽 첫번째 제품 첫번째 대체재',
                            img_src: '',
                            snow_count: 0
                        },
                        {
                            title: '첫번째 토픽 첫번째 제품 두번째 대체재',
                            img_src: '',
                            snow_count: 0
                        }
                    ],
                    search: '옥시'      //[]
                },
                {
                    title: '첫번째 토픽 두번째 제품',
                    img_src: '',
                    alters: [
                        {
                            title: '첫번째 토픽 두번째 제품 첫번째 대체재',
                            img_src: '',
                            snow_count: 0
                        },
                        {
                            title: '첫번째 토픽 두번째 제품 두번째 대체재',
                            img_src: '',
                            snow_count: 0
                        }
                    ],
                    search: '옥시'      //[]
                }
            ]
        }
    ]
}

export {
    mock,
    snows
};
