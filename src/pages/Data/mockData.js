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
    mock
};
