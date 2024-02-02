const PRODUCTS = [
    {
        id: 1,
        name: 'Áo thun unisex cổ tròn tay ngắn New Year Dragon',
        price: '1,000,000đ',
        colors: ['#83E5FF', '#50C190', '#000000'],
        rating: 4,
        checkImg: {
            '#83E5FF': true,
            '#50C190': false,
            '#000000': false,
        },

        linkImg: {
            '#83E5FF': 'https://product.hstatic.net/200000642007/product/07bll_3atsq0141_1_1ac4a4eec2594999a1f8ca852eda2c63_c7a6a59cfc1e4bab945a91c9888c931e_master.jpg',
            '#50C190': 'https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_1_abf4586c6e234d289f7dfbfa79199a30_fa4da3ca396a4722abb847cc2ca438f9_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsq0141_1_87aa155f270042b8bb6ebba3db65ea4f_9fb5a6691aa8439481e119e63f35ca32_master.jpg',
        },
    },
    {
        id: 2,
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram',
        price: '2,210,000đ',
        colors: ['#83E5FF', '#DECAB1', '#000000'],
        rating: 4,
        checkImg: {
            '#83E5FF': false,
            '#DECAB1': false,
            '#000000': true,
        },

        linkImg: {
            '#83E5FF': 'https://product.hstatic.net/200000642007/product/07cbl_3atsm1133_1_b1bc2827806e4d918ab5f4f097a97bbc_6ce97932f1a549dc8a72fcfa698b413a_master.jpg',
            '#DECAB1': 'https://product.hstatic.net/200000642007/product/43sal_3atsm1133_1_85072e74395743a5a550c0c434425f52_46eaaca2a17443ec9dced778ad904a18_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsm1133_1_b1ff5e285143405d9f048f48d4368e7d_b36961017f8f471896e12b1b207f1629_master.jpg',
        }
    },
    {
        id: 3,
        name: 'Áo sơ mi unisex cổ bẻ tay ngắn Mega Dia Monogram',
        price: '3,650,000đ',
        colors: ['#83E5FF', '#DEDBD2'],
        rating: 5,
        checkImg: {
            '#83E5FF': false,
            '#DEDBD2': true
        },

        linkImg: {
            '#83E5FF': 'https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_2_4ca1ab41c64c40148e3c1ab44a2909f2_1a30367667d6491e887a7d9116b83116_master.jpg',
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/50whs_3awsm0533_2_1c814d4400434ae893d32b0c4cab6de1_87345655e0214e778f96f65ee45e2aad_master.jpg'
        }
    }
    ,
    {
        id: 4,
        name: 'Áo polo nam tay ngắn Basic Comfortable Fit Collar',
        price: '620,000đ',
        colors: ['#DEDBD2', '#517AAE', '#000000'],
        rating: 5,
        checkImg: {
            '#DEDBD2': true,
            '#517AAE': false,
            '#000000': false,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_1_b4ac972faacc4a3386328bf247a7ddb8_9d3d266b0efd401696b5cd75525dab66_master.jpg',
            '#517AAE': 'https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_1_8c934f6e2e04476482ca6e11a1098e68_1880de3b53b04449a7768fc2188ec29e_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_1_d243d24b95bc4f2c91018ed5f4bbdef0_dab59ee1ce214162ba0ec4cf04bac9e0_master.jpg',
        }
    }

];
export default PRODUCTS;