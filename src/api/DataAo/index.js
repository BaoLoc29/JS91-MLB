const DATAAO = [
    {
        id: 1,
        name: 'Áo thun unisex cổ tròn tay ngắn New Year Dragon',
        price: '1,000,000đ',
        colors: ['#83E5FF', '#50C190', '#DEDBD2','#314469', '#000000'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#83E5FF': true,
            '#50C190': false,
            '#314469' : false,
            '#DEDBD2' : false,
            '#000000': false
        },

        linkImg: {
            '#83E5FF': 'https://product.hstatic.net/200000642007/product/07bll_3atsq0141_1_1ac4a4eec2594999a1f8ca852eda2c63_c7a6a59cfc1e4bab945a91c9888c931e_master.jpg',
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/50crs_3atsq0141_1_b13da46ff7b74c459bc13b22565bb71c_5a0c7b184d934ec0b16907fa4d11d5f5_master.jpg',
            '#50C190': 'https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_1_abf4586c6e234d289f7dfbfa79199a30_fa4da3ca396a4722abb847cc2ca438f9_master.jpg',
            '#314469': 'https://product.hstatic.net/200000642007/product/43nys_3atsq0141_1_ac3a76475c894e00bdb2935ef9379bea_4f63093ef8624bb1973c5a71736ad9e2_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsq0141_1_87aa155f270042b8bb6ebba3db65ea4f_9fb5a6691aa8439481e119e63f35ca32_master.jpg'
        },
    },
    {
        id: 2,
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram',
        price: '2,210,000đ',
        colors: ['#83E5FF', '#DECAB1', '#000000'],
        category: 'Áo thun',
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
        category: 'Áo sơ mi',
        rating: 5,
        checkImg: {
            '#83E5FF': false,
            '#DEDBD2': true
        },

        linkImg: {
            '#83E5FF': 'https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_2_4ca1ab41c64c40148e3c1ab44a2909f2_1a30367667d6491e887a7d9116b83116_master.jpg',
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/50whs_3awsm0533_2_1c814d4400434ae893d32b0c4cab6de1_87345655e0214e778f96f65ee45e2aad_master.jpg'
        }
    },
    {
        id: 4,
        name: 'Áo polo nam tay ngắn Basic Comfortable Fit Collar',
        price: '620,000đ',
        colors: ['#DEDBD2', '#517AAE', '#000000'],
        category: 'Áo polo',
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
    },
    {
        id: 5,
        name: 'Áo sweatshirt unisex Basic Mega Logo',
        price: '2,490,000đ',
        colors: ['#DEDBD2', '#442922', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#DEDBD2': true,
            '#442922': false,
            '#000000': false,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_2_b13275d0b7d8410cbd77419d02a72cba_6cbc099abd7149f8bc0d6fe82c7282f2_master.jpg',
            '#442922': 'https://product.hstatic.net/200000642007/product/43brd_3amtb0434_1_d00a2427af564dcfb88e0305773f4bfe_ba45ef50405a4a1eb051537705fdd390_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtb0434_2_27705e7e6afd41fbaea0349ab50025bf_c59cf152eb7f4e21be5b83c856c06973_master.jpg',
        }
    },
    {
        id: 6,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Monative Monogram',
        price: '2,990,000đ',
        colors: ['#E9E5D8', '#CB9864', '#1F2230'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#E9E5D8': true,
            '#CB9864': false,
            '#1F2230': false,
        },

        linkImg: {
            '#E9E5D8': 'https://product.hstatic.net/200000642007/product/50crs_3amtm0934_1_75ab53f179a44d02bace35cc12fb472f_2fb20ac59e6243b0b70485e489512930_master.jpg',
            '#CB9864': 'https://product.hstatic.net/200000642007/product/45cal_3amtm0934_1_6b2eafd71d8843fcb509040bb67b45a6_957fc41fd90f4e4296486775d97f9b7c_master.jpg',
            '#1F2230': 'https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_8_73e9970307af427e9a41ce90b1a5fc10_f0ccb083f1c84e28a9540a704ab0a4db_master.jpg',
        }
    },
    {
        id: 7,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Mega Bear Winter',
        price: '2,990,000đ',
        colors: ['#EBE7DC', '#28396F'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#EBE7DC': false,
            '#28396F': true,
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3amte0236_1_ed34d0bab98a4f6b8992060f21da36f3_95eb6dd60d8f4a97be872975bfe15fa9_master.jpg',
            '#28396F': 'https://product.hstatic.net/200000642007/product/07rbs_3amte0236_10_c95b2165add84bafb07a645d3a9c0733_1682ef287dda478da20fc053d1185970_master.jpg'
        }
    },
    {
        id: 8,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Mega Bear Winter',
        price: '2,290,000đ',
        colors: ['#046053', '#E3E4D6', '#EDCED3', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#046053': true,
            '#E3E4D6': false,
            '#EDCED3' : false,
            '#000000': false
        },

        linkImg: {
            '#046053': 'https://product.hstatic.net/200000642007/product/07gns_3amte0134_1_8b1a905e497748568d95a85e93c3916e_1987f0b0d1ac4fd9b1ea0719eb6fe34a_master.jpg',
            '#E3E4D6': 'https://product.hstatic.net/200000642007/product/43crd_3amte0134_1_300a667148434094896af69bab9fdc51_8c752fd8b83d4eec901672746a907e4f_master.jpg',
            '#EDCED3': 'https://product.hstatic.net/200000642007/product/50pkl_3amte0134_1_02317fa559ee40119b6b350e7330ccf4_a49d03d3f7b143648f39cf1f3ef33335_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amte0134_2_e6a684366f8546f8b1eabf2d7687ea54_6e71ef3183a44f229d2779a6cbd4b141_master.jpg'
        },
    },
    {
        id: 9,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Heart Comfortable Fit',
        price: '2,490,000đ',
        colors: ['#DFD8C8', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#DFD8C8': false,
            '#000000': true,
        },

        linkImg: {
            '#DFD8C8': 'https://product.hstatic.net/200000642007/product/50crd_3amth0234_1_3592698678e8415cbe5ff7fdbba84bcc_07bc65febaf54dd680feb7094482ee6a_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amth0234_2_58e81f5a00244d90b84699588a356a71_cd799d66adfe4cd1a90348483bca3a73_master.jpg'
        }
    },
    {
        id: 10,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Diamond Monogram Jacquard',
        price: '3,490,000đ',
        colors: ['#55352A', '#CAA06E', '#000000', '#E3E0D1'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#55352A': false,
            '#CAA06E': true,
            '#000000': false,
            '#E3E0D1': false
        },

        linkImg: {
            '#55352A': 'https://product.hstatic.net/200000642007/product/43brd_3amtm0134_1_752a7c1142a94424a5b00a4015c87cb8_7ad60bea318a45b3bca80121584b1df3_master.jpg',
            '#CAA06E': 'https://product.hstatic.net/200000642007/product/43cal_3amtm0134_8_2af3444c18044b8cb3af0a7758972ecb_a7caa8f5e70a41d4ab82de021617fa18_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtm0134_2_d48887f32aee4cf79e2e3ce2daf88783_8ab1012b49a14132b172a1f68ef1fc80_master.jpg',
            '#E3E0D1': 'https://product.hstatic.net/200000642007/product/50crd_3amtm0134_2_69e7223ca7d34b2fbbf8d4aa6b41b691_b7e2a8242b494e5ca7d1ec833eefe2ac_master.jpg'
        }
    },
    {
        id: 11,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Classic Monogram',
        price: '3,690,000đ',
        colors: ['#171E2E', '#5188AF', '#DCBCC1', '#DADBD3'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#171E2E': true,
            '#5188AF': false,
            '#DCBCC1': false,
            '#DADBD3': false
        },

        linkImg: {
            '#171E2E': 'https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_2_371b46fdd9204cfba5270ccdb0814308_adad8e54b65d4d2a9e1ffe6fa1879817_master.jpg',
            '#5188AF': 'https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_1_162b87d4ebb04120a6b3080bee287a6d_299bbf20cf2e44bb81d03277fa181950_master.jpg',
            '#DCBCC1': 'https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_1_d12fa2f504d445ea92d3c5599f55bbc0_d80154bc4b5e4027b5bd29a53015b395_master.jpg',
            '#DADBD3': 'https://product.hstatic.net/200000642007/product/50crd_3amtm0334_2_4b73063dc7e34e56afc0b7e7f909800f_e45afe60310e4e4fadf85a601dcf5f1b_master.jpg'
        }
    },
    {
        id: 12,
        name: 'Áo sơ mi denim unisex cổ bẻ tay dài phom suông thời trang',
        price: '4,690,000đ',
        colors: ['#EFC3BA', '#3D608A'],
        category: 'Áo sơ mi',
        rating: 5,
        checkImg: {
            '#EFC3BA': true,
            '#3D608A': false
        },

        linkImg: {
            '#EFC3BA': 'https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_1_78c914f0ca4a40209566855eb1de922c_dbb6793d4e554a87854bd64e2fb2aae7_master.jpg',
            '#3D608A': 'https://product.hstatic.net/200000642007/product/50ins_3adrr0134_2_20dd3c7a343a40569255423833143e5a_2c77a9a24c5241e180e5aa95475e1032_master.jpg'
        }
    },
    {
        id: 13,
        name: 'Áo hoodie unisex tay dài phối mũ Basic Mega Logo Overfit',
        price: '3,290,000đ',
        colors: ['#EDEDEA', '#B7B9B9', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#EDEDEA': true,
            '#B7B9B9': false,
            '#000000': false
        },

        linkImg: {
            '#EDEDEA': 'https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_10_e58d11e30b794db7ab7e8de0f6b7a4e7_99a90290ade94f22aa0c9e111213f899_master.jpg',
            '#B7B9B9': 'https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_9_517bdcf399754cf2845df8c7f4771c23_dd08e3dcd70145aa9a8d5c89f11a85b4_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_10_da89d5388b7f40848a9064d75dc1e621_4d5441ddca80491583a326155d2e1eb4_master.jpg'
        }
    },
    {
        id: 14,
        name: 'Áo hoodie unisex tay dài Cube Monogram Big Lux',
        price: '3,290,000đ',
        colors: ['#F3EDE1', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#F3EDE1': false,
            '#000000': true
        },

        linkImg: {
            '#F3EDE1': 'https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_10_4c3ce5b8f808499eba35c1730aa81cc0_daf85b970723480286dd80f9afafe878_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_8_e10c820cda70472c9ff912628cf686b7_f2781af6c7ec4c38b701569b710fdab7_master.jpg'
        }
    },
    {
        id: 15,
        name: 'Áo sweatshirt unisex cổ tròn tay dài bo gấu thời trang',
        price: '2,690,000đ',
        colors: ['#143A83', '#A5091E', '#D68C05', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#143A83': false,
            '#A5091E': true,
            '#D68C05': false,
            '#000000': false
        },

        linkImg: {
            '#143A83': 'https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_1_cff56afff5ed4e8bb8f0b072c71fd203_8037a2e8c2314d90bdc29a2263b8e7b2_master.jpg',
            '#A5091E' : 'https://product.hstatic.net/200000642007/product/43rds_3amtv1034_1_06cb8f72a3464655896c39013f77ce43_a2519f70ded844fdb7b0d5c93c73674d_master.jpg',
            '#D68C05' : 'https://product.hstatic.net/200000642007/product/45msd_3amtv1034_1_f2b0b90a30ad4d9caaf33e205fe7d433_f3495d0914e940cfa53eafdd08c92d9d_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtv1034_1_28a4b7fee4b349478b3768dc6b93384a_b32380ff3cf0461598e8a90b17d0f1e7_master.jpg'
        }
    },
    {
        id: 16,
        name: 'Áo sơ mi denim unisex cổ bẻ tay dài Basic Multi Mega',
        price: '4,690,000đ',
        colors: ['#E9E7DA'],
        category: 'Áo sơ mi',
        rating: 4,
        checkImg: {
            '#E9E7DA': true,
        },

        linkImg: {
            '#E9E7DA': 'https://product.hstatic.net/200000642007/product/43crm_3adrb0334_1_77b74405062c41b7b42d15b75b0666fe_f5517eb4260e4423b47cc0180e9afa8b_master.jpg'
        }
    },
    {
        id: 17,
        name: 'Áo thun unisex tay ngắn in hình dễ thương thời trang giới trẻ',
        price: '1,690,000đ',
        colors: ['#F1ECE6', '#283069'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#F1ECE6': true,
            '#283069': false
        },

        linkImg: {
            '#F1ECE6': 'https://product.hstatic.net/200000642007/product/50crs_3atse0434_1_25b2991a47af4f37b69b0da74948f34e_15f7dc9413074fa69c53484885ca0724_master.jpg',
            '#283069': 'https://product.hstatic.net/200000642007/product/07rbs_3atse0434_1_2dde617678bc40469a9b135f6af48d18_3878eba6e036401680c46c486d320029_master.jpg'
        }
    },
    {
        id: 18,
        name: 'Áo thun unisex cổ tròn tay ngắn trẻ trung thời trang giới trẻ',
        price: '1,590,000đ',
        colors: ['#E5E1D6', '#046250', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#E5E1D6': false,
            '#046250': true,
            '#000000': false
        },

        linkImg: {
            '#E5E1D6': 'https://product.hstatic.net/200000642007/product/50crs_3atse0234_1_577e2d9625d0412cb0cdbadc42a73539_2a5cf3db0c6a4fed8831bf8593f4c6b3_master.jpg',
            '#046250': 'https://product.hstatic.net/200000642007/product/07gns_3atse0234_1_4b391a9f09984704964925c5e6f1204a_7daaa893ca854b268c00bce40a8ebafa_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atse0234_1_23fd58ff3c67499cb8b87f442f48875e_8140095a02264be4a8dabc2ef24ed074_master.jpg'
        }
    },
    {
        id: 19,
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông thời trang',
        price: '1,790,000đ',
        colors: ['#A2C6EA', '#A9A9A7', '#33354E'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#A2C6EA': false,
            '#A9A9A7': true,
            '#33354E': false
        },

        linkImg: {
            '#A2C6EA': 'https://product.hstatic.net/200000642007/product/07bll_3atsm0434_1_3ebec5235f084f32b2b48b2ef88ff6c8_e4696f9bb4304e25b99748661a6c276b_master.jpg',
            '#A9A9A7': 'https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_1_2a3db8cfe09f4100934411255efe700f_9cad2e7b796d46bb938981849bcdb5a0_master.jpg',
            '#33354E': 'https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_1_f0d819babd0e40bfbade15250fd69f54_e2ac84b062304cfcac6c59ff74bf4aa7_master.jpg'
        }
    },
    {
        id: 20,
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông hiện đại',
        price: '1,790,000đ',
        colors: ['#A8D3C6', '#E7E7E5', '#EBD5B7', '#000000'],
        category: 'Áo thun',
        rating: 3,
        checkImg: {
            '#A8D3C6': true,
            '#E7E7E5': false,
            '#EBD5B7': false,
            '#000000': false
        },

        linkImg: {
            '#A8D3C6': 'https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_1_fd8f1c9cc034497e9619df8e5d7911c8_f02e695ec8c74f5e9143d96aa73eb121_master.jpg',
            '#E7E7E5': 'https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_1_3d0cfd6650a648399df30cbbc1b8cab8_ae7ad873261d41839e4118e680c01fbc_master.jpg',
            '#EBD5B7': 'https://product.hstatic.net/200000642007/product/50sal_3atsl0134_1_2c6860f8cd4144fcae2ba058a942732f_b66fb94c53c54620897ee61a8565aea0_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg'
        }
    },
    {
        id: 21,
        name: 'Áo thun unisex cổ tròn tay ngắn in hình dễ thương',
        price: '1,530,000đ',
        colors: ['#EDE7DB', '#EDC7CC', '#045C44', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EDE7DB': false,
            '#EDC7CC': true,
            '#045C44': false,
            '#000000': false
        },

        linkImg: {
            '#EDE7DB': 'https://product.hstatic.net/200000642007/product/43crd_3atse0334_1_b5dd942df1ea4337aeea80654dc1d9b1_e04f9e0ffd7744fc96f063ba28c30017_master.jpg',
            '#EDC7CC': 'https://product.hstatic.net/200000642007/product/50pkl_3atse0334_1_acfe8d8c2efa419496d10779de01b78b_3729655db936469eac5764a635340606_master.jpg',
            '#045C44': 'https://product.hstatic.net/200000642007/product/07gns_3atse0334_1_712eb8f8c9694972b01e19a04404d9ed_2ce894b7e9284b3184696427ed853e5b_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atse0334_1_7477d62e24054123958d170e1e919931_d7dabff799aa449393fb5d2ef48b05d8_master.jpg'
        }
    },
    {
        id: 22,
        name: 'Áo thun unisex cổ tròn tay ngắn hiện đại cho giới trẻ',
        price: '1,030,000đ',
        colors: ['#EDECE2', '#D8DAD7', '#D2B190','#2D324F', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EDECE2': false,
            '#D8DAD7': false,
            '#D2B190': false,
            '#2D324F': true,
            '#000000': false
        },

        linkImg: {
            '#EDECE2': 'https://product.hstatic.net/200000642007/product/50crs_3atsb0434_1_7979b4dd7db2447cbf2ddf26b2761493_2ea1ec6877d44a8595a61637e526a486_master.jpg',
            '#D8DAD7': 'https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_1_ed221b331c734d519795d7e1ed9583c8_7399e3ec89a04ab583b477b046106d15_master.jpg',
            '#D2B190': 'https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_1_f4d88ad0391d429ca44a6febb46c4b49_11145fceda6c4a81a65f102ba0c6ec16_master.jpg',
            '#2D324F': 'https://product.hstatic.net/200000642007/product/09nys_3atsb0434_1_9db99a5fe278409397edfc9017aa2b37_057f17120f20447687ba45dc542b01ed_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atse0334_1_7477d62e24054123958d170e1e919931_d7dabff799aa449393fb5d2ef48b05d8_master.jpg'
        }
    },
    {
        id: 23,
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram Big Lux',
        price: '1,790,000đ',
        colors: ['#ECE6DA', '#F2D3D8', '#282A37', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#ECE6DA': false,
            '#F2D3D8': false,
            '#282A37': false,
            '#000000': true
        },

        linkImg: {
            '#ECE6DA': 'https://product.hstatic.net/200000642007/product/50crd_3atsm0334_1_07b8ea5bb8834ca7b459b8d698809a8b_11412700bcd84a9e8221121722a36c6d_master.jpg',
            '#F2D3D8': 'https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_1_b121fa37929e4551a106dc7cc5851096_f8e3c407d77d4e9faffe4375574096a6_master.jpg',
            '#282A37': 'https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_1_b59ffedb0b0b4edbaca9e96eb3312583_2869d8835ad04e88a32cfd3a9490c58c_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsm0334_8_e220b637b88f43ba878a285bbee6c618_4ada60c9767a4b3dbef213365c4e8ba7_master.jpg'
        }
    },
    {
        id: 24,
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram',
        price: '1,990,000đ',
        colors: ['#ECE6DA', '#729EC1', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#ECE6DA': false,
            '#729EC1': true,
            '#000000': false
        },

        linkImg: {
            '#ECE6DA': 'https://product.hstatic.net/200000642007/product/50crd_3atsm0134_1_4667718bb2d848689d1f41c6e33fd346_d845693cd5354321a4f96eb6261d4c8d_master.jpg',
            '#729EC1': 'https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_1_a29b4c00f72848d3816b74f7b064e606_41a0b8544a8c4fb682de9fe9d9a9dcea_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsm0134_1_e93f4e72c74b45f180d3463c93c7bc71_6c3289e9674042a589a61a43592da23d_master.jpg'
        }
    },
    {
        id: 25,
        name: 'Áo thun unisex cổ tròn tay ngắn Checkerboard Big Lux',
        price: '1,590,000đ',
        colors: ['#ECE6DA', '#729EC1', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#ECE6DA': false,
            '#729EC1': true,
            '#000000': false
        },

        linkImg: {
            '#ECE6DA': 'https://product.hstatic.net/200000642007/product/43crs_3atso0134_1_0f93867624284e41881c0c0f96f39b2d_dfb68580b7a64577822a60f85320fc14_master.jpg',
            '#729EC1': 'https://product.hstatic.net/200000642007/product/07bll_3atso0134_1_5610483bb19648cdbd6a9c0c299c0a5e_c72802951aac4ce295ad9e5867abcbe6_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atso0134_1_c021aae9587642be9497edd1b945fa6a_4221bf7b087c4afda849c99491cd5c07_master.jpg'
        }
    },
    {
        id: 26,
        name: 'Áo thun unisex cổ tròn tay ngắn Basic Mega Logo',
        price: '1,290,000đ',
        colors: ['#E7E7E5', '#CFAD8A', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#E7E7E5': true,
            '#CFAD8A': false,
            '#000000': false
        },

        linkImg: {
            '#E7E7E5': 'https://product.hstatic.net/200000642007/product/09whs_3atsb0534_1_819429700e1e4ed896f81e2a912caa3d_2313f32ddda7406b8e1e1018c7511c9c_master.jpg',
            '#CFAD8A': 'https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_1_d877e9cfa8a84aa49458688f95c60c8e_6738a4cb169746a782b6a1061b18e8e9_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsb0534_1_9ec06aa64b58454fb5e940b49aad68cb_90bd1298730145dd8b821c4456148027_master.jpg'
        }
    },
    {
        id: 27,
        name: 'Áo khoác unisex cổ tròn tay dài Varsity thời trang',
        price: '2,290,000đ',
        colors: ['#353439'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#353439': true,
        },

        linkImg: {
            '#353439': 'https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_1_44c16843f2e7422b8ab740d0e0008ef2_0d6a34b7403b494195df146e85672027_master.jpg'
        }
    },
    {
        id: 28,
        name: 'Áo thun unisex cổ tròn tay dài Basic Small Logo',
        price: '1,290,000đ',
        colors: ['#E1DDD5', '#7E202E', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#E1DDD5': false,
            '#7E202E': true,
            '#000000': false
        },

        linkImg: {
            '#E1DDD5': 'https://product.hstatic.net/200000642007/product/50crs_3atsb0134_1_b5e30418209a4125a4854f49aa1c3f60_4339af450c834cae88528e2f98a68215_master.jpg',
            '#7E202E': 'https://product.hstatic.net/200000642007/product/43wid_3atsb0134_1_580ebc3c58db45b8b74cec1922e1f77c_904641969de44b1d893c9ec68f908809_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsb0134_2_aa1f417a1449480789bf6967ec871cd4_d1c9edc49ff84258a72a5be135a97d1f_master.jpg'
        }
    },
    {
        id: 29,
        name: 'Áo ba lỗ unisex sát nách cổ tròn Basic Big Logo',
        price: '1,090,000đ',
        colors: ['#E7E8E8', '#000000'],
        category: 'Áo sát nách',
        rating: 5,
        checkImg: {
            '#E7E8E8': false,
            '#000000': true
        },

        linkImg: {
            '#E7E8E8': 'https://product.hstatic.net/200000642007/product/07whs_3atkb0233_2_203a316a75134bd8a9b7a405f5986d88_6d6f46ea381645b4bdd4c08a84c17b91_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atkb0233_1_a7ffc8ff298c4747b483e963f45dff4d_8deb2f2017f440199e3f22ee081fdaf2_master.jpg'
        }
    },
    {
        id: 30,
        name: 'Áo thun unisex cổ tròn tay dài Basic Mega Logo',
        price: '1,090,000đ',
        colors: ['#E7E8E8', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#E7E8E8': true,
            '#000000': false
        },

        linkImg: {
            '#E7E8E8': 'https://product.hstatic.net/200000642007/product/07whs_3atsb0334_1_dc267f3bb5114a0ebb1e920162a4106a_140ac90ea30a4d90bb4c82102468568b_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsb0334_9_1bdf55b31a5b4e9a80eccf4c0156597f_af60b436c1d94123877e4f0c801d3679_master.jpg'
        }
    },
    {
        id: 31,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Varsity thời trang',
        price: '2,290,000đ',
        colors: ['#A27244','#6C1927', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#A27244': true,
            '#6C1927': false,
            '#000000': false
        },

        linkImg: {
            '#A27244': 'https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_1_2267af95828247028b76dead9ffcf39a_a602770d0eb145d7a50b779e580d77f0_master.jpg',
            '#6C1927': 'https://product.hstatic.net/200000642007/product/43wid_3amtv0134_1_2a40070f6b92430a98923a99a83d96f2_c8f0d816913943179c1509f2bd3ce7a7_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtv0134_2_7474092faebe406caaade988b5825d32_40b9d726a9de4f9faca0ba9ae8d797dd_master.jpg'
        }
    },
    {
        id: 32,
        name: 'Áo sweatshirt unisex cổ tròn tay dài thời trang',
        price: '2,490,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#EBE7DC': true,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3amtl1034_1_28f8c1e558994e83a4cad8aa484c8b5c_63bc26aa0fcb4ef2bac9a7de19b11a37_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/43bks_3amtl1034_1_d1a10530faed449d8aa4893ad84b3dd3_9e4085d49abf4ca288408e09854ee7f9_master.jpg'
        }
    },
    {
        id: 33,
        name: 'Áo sweatshirt unisex cổ tròn tay dài form suông thời trang',
        price: '2,990,000đ',
        colors: ['#C8A584','#C691C7', '#18223C'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#C8A584': false,
            '#C691C7': true,
            '#18223C': false
        },

        linkImg: {
            '#C8A584': 'https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_1_5715c737eb474c56b4f55ec53985370b_d37b577978d44edbbd54b01e3e2a710f_master.jpg',
            '#C691C7': 'https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_1_ed593a46d21447c4ab60875c474f89e8_097d403aa7324bbba7a0de31d683e26a_master.jpg',
            '#18223C': 'https://product.hstatic.net/200000642007/product/45nys_3amtm1034_1_736eb7a975a744c4a3f16f4bca52f51b_569edc3ca0b843cd8edc1c6f0452d640_master.jpg'
        }
    },
    {
        id: 34,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Monogram Big Lux',
        price: '2,690,000đ',
        colors: ['#EAE5DB', '#6F7470','#C4A07C', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#EAE5DB': true,
            '#6F7470': false,
            '#C4A07C': false,
            '#000000': false
        },

        linkImg: {
            '#EAE5DB': 'https://product.hstatic.net/200000642007/product/50crs_3amtm1234_1_8c14cb3df65c479091dddc6f955b0bbf_401602a464b649e18079906beecce85c_master.jpg',
            '#6F7470': 'https://product.hstatic.net/200000642007/product/43grd_3amtm1234_2_e89027e65bc740019e560e43427cdf5d_e244371757ce487ba5e0ee4d4292b6fb_master.jpg',
            '#C4A07C': 'https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_8_6cd737a69abf4025be6928d9e0219065_904b1b7b4d514963af8c8e1910c2f780_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtm1234_8_75fa1a2197d641f5ab6cb990fc65134e_6d84bc91acdc4cecb2dd79c49d3c673b_master.jpg'
        }
    },
    {
        id: 35,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Like Pop Art',
        price: '2,690,000đ',
        colors: ['#DEDACF', '#98C1AF', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#DEDACF': false,
            '#98C1AF': true,
            '#000000': false
        },

        linkImg: {
            '#DEDACF': 'https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_1_c6eb4b48216c4791a18f5d9ab1fe3ad6_6428b6385a66419ba5ab69ec0cee27c9_master.jpg',
            '#98C1AF': 'https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_1_5b33b42fbed049cfb8603c956d38b75e_66fe63a7db81438594c2fe2a895358cf_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/07bks_3amtl2034_8_0972628640ea47109261dc09f42f339c_d701038250904e2eac7b590385e3be99_master.jpg'
        }
    },
    {
        id: 36,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Like Daily',
        price: '2,690,000đ',
        colors: ['#D4DADA','#B8DFD4', '#DFCAAB', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#D4DADA': false,
            '#B8DFD4': false,
            '#DFCAAB': true,
            '#000000': false
        },

        linkImg: {
            '#D4DADA': 'https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_2_bddeede486e040fe876331d00b665103_e45d1715c84b41d08c34ef6dad963964_master.jpg',
            '#B8DFD4': 'https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_1_fa90bf5b9fb145859b3acc0a4dce9798_6ec08e839a664dffa88e5daeea940cb9_master.jpg',
            '#DFCAAB': 'https://product.hstatic.net/200000642007/product/50sal_3amtl0134_1_326f010c0ffa4cbdaff7cb8baae19f88_b7979da715f44617aed789a6051315ca_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtl0134_1_d2396f9e73964054a2751d0af2b73cbd_dca12c4808564431952a1466abdafcd9_master.jpg'
        }
    },
    {
        id: 37,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Classic Monogram',
        price: '2,690,000đ',
        colors: ['#E1E1D5','#E3C0C6', '#262D3D', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#E1E1D5': true,
            '#E3C0C6': false,
            '#262D3D': false,
            '#000000': false
        },

        linkImg: {
            '#E1E1D5': 'https://product.hstatic.net/200000642007/product/50crd_3amtm0234_1_3e22668c072e49dc96b66eaa46fc8206_54912c1c0fdc4bc387aa36cb6b97bc11_master.jpg',
            '#E3C0C6': 'https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_1_137a313e670a4614a13b4947fc841332_1322a4f3f86b44a7af9dd7f0a63e2972_master.jpg',
            '#262D3D': 'https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_2_356b800f05de4e3ea018aee7e62c43b7_35f79d38270b4079b7fe37f4cd89f2ca_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtm0234_1_be0e924c9e2140e283d8a5967b073893_c27b10e222984afab58df02e6dd65c0c_master.jpg'
        }
    },
    {
        id: 38,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Classic Gradient Monogram',
        price: '3,190,000đ',
        colors: ['#F4F0E5','#734837', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#F4F0E5': false,
            '#734837': true,
            '#000000': false
        },

        linkImg: {
            '#F4F0E5': 'https://product.hstatic.net/200000642007/product/50crs_3amtm1334_2_c795521c45714cb1a78b961ecd831b71_3f55d98816144e23a6f2fc48cd267386_master.jpg',
            '#734837': 'https://product.hstatic.net/200000642007/product/43brd_3amtm1334_1_35621ee9833743b2ace9fbe13ca85b24_b058b5d0fb544ee0a5260d88ea9fb2e9_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtm1334_2_f019614535214d17a31eaebe73969204_d3a17038e74c4e47b43054785cb0eaff_master.jpg'
        }
    },
    {
        id: 39,
        name: 'Áo sweatshirt unisex cổ tròn tay dài bo gấu thời trang',
        price: '2,690,000đ',
        colors: ['#D48C07','#A7091E','#103880', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#D48C07': false,
            '#A7091E': false,
            '#103880': true,
            '#000000': false
        },

        linkImg: {
            '#D48C07': 'https://product.hstatic.net/200000642007/product/45msd_3amtv1034_1_f2b0b90a30ad4d9caaf33e205fe7d433_f3495d0914e940cfa53eafdd08c92d9d_master.jpg',
            '#A7091E': 'https://product.hstatic.net/200000642007/product/43rds_3amtv1034_1_06cb8f72a3464655896c39013f77ce43_a2519f70ded844fdb7b0d5c93c73674d_master.jpg',
            '#103880': 'https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_1_cff56afff5ed4e8bb8f0b072c71fd203_8037a2e8c2314d90bdc29a2263b8e7b2_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtv1034_1_28a4b7fee4b349478b3768dc6b93384a_b32380ff3cf0461598e8a90b17d0f1e7_master.jpg'
        }
    },
    {
        id: 40,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Basic Bling Mega Logo',
        price: '2,690,000đ',
        colors: ['#1C2842','#0D3831', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#1C2842': true,
            '#0D3831': false,
            '#000000': false
        },

        linkImg: {
            '#1C2842': 'https://product.hstatic.net/200000642007/product/07nys_3amtb1034_1_7d111ddc303d4e7cb124735e2ba0e77b_9b308f7484c84cd381a804fba837ff3a_master.jpg',
            '#0D3831': 'https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_1_d56040f24f8645319758a6795aed94a1_df19458f40ef4821abcb6c1f8fa59d22_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3amtb1034_8_c82e49ac74c94dd2b072dea17a27ef20_1303723f2a6d415d966878cb86f56e88_master.jpg'
        }
    },
    {
        id: 41,
        name: 'Áo hoodie unisex tay dài phối mũ Checkerboard Big Lux Mega',
        price: '3,290,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#EBE7DC': true,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_1_dc86c45439d94bd6b91424b0c3e038f6_7e523f4e5da5495fa63c7094e56b1384_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_9_884400e78aa14e5e8a1c5ab6209e047c_9de60b37899445a9b1db5acecb17830d_master.jpg'
        }
    },
    {
        id: 42,
        name: 'Áo hoodie unisex tay dài phối mũ Basic Small Logo',
        price: '2,590,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#EBE7DC': true,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_1_8670c34f673447069784fb06a93df687_3b4e3fa879724b04bfb45a258e59c748_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_2_dcebb0cc2ab446a9869c4a83062b9f5c_eba280853cc44e24ae44597c4c46d938_master.jpg'
        }
    },
    {
        id: 43,
        name: 'Áo thun unisex cổ tròn tay ngắn trẻ trung thời trang cao cấp',
        price: '1,590,000đ',
        colors: ['#EBE7DC','#9EC9BF','#FB82B1', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': false,
            '#9EC9BF': true,
            '#FB82B1': false,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/45crs_3atsb1134_1_82423cd33f2a488a9af1c971a0677651_40baecd376ef4302b9ba8dc42da74aff_master.jpg',
            '#9EC9BF': 'https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_1_0f6ddcf27aab4a4899af9eaf82fcd374_3422db4f80684065b3f22db6e5abffd5_master.jpg',
            '#FB82B1': 'https://product.hstatic.net/200000642007/product/43pks_3atsb1134_1_499e15de499a4c40bd3e2be576ae91dd_e912f2b3fb4c4a5196fee7adce01aa03_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsb1134_1_846ff5288e4c49d7a2efef84ffac42de_875ac170798244f280fd1590ee12f471_master.jpg'
        }
    },
    {
        id: 44,
        name: 'Áo thun unisex cổ tròn tay ngắn thời trang',
        price: '1,590,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': false,
            '#000000': true
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3atse0134_1_15b34f8ff5374dd487a7612ceda221b1_4cbcc193ef2847679d875138a8c456e1_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atse0134_1_58a83815ffdd4ee4af84bfd302b0d10f_f563ae171812431aad0e432f62f4fa50_master.jpg'
        }
    },
    {
        id: 45,
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông trẻ trung',
        price: '1,690,000đ',
        colors: ['#EBE7DC','#CE9F70','#8063A6', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': false,
            '#CE9F70': true,
            '#8063A6': false,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3atsm0234_1_61c7478af18f4ad4bf171d60123d8841_8fedc6623d1b416fb203049046fa3af3_master.jpg',
            '#CE9F70': 'https://product.hstatic.net/200000642007/product/45cal_3atsm0234_1_1b47a7d528524408bc1b8f09d9c1e2b5_5b14f4b0ecda494a946355414d6c8897_master.jpg',
            '#8063A6': 'https://product.hstatic.net/200000642007/product/50ldd_3atsm0234_1_78bd986dbf304810ac73a2b9ea7aea9c_f54950552f7e4f27a80cdf370b194e2a_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsm0234_1_5dbc2c792ba2475aa767643f640b51ce_e9978d840ad5476993aaec44269bcbfa_master.jpg'
        }
    },
    {
        id: 46,
        name: 'Áo thun unisex cổ tròn tay ngắn in logo thời trang trẻ trung',
        price: '1,290,000đ',
        colors: ['#D7C5AD','#B98AC0','#025042', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#D7C5AD': false,
            '#B98AC0': true,
            '#025042': false,
            '#000000': false
        },

        linkImg: {
            '#D7C5AD': 'https://product.hstatic.net/200000642007/product/43bgl_3atsv0234_1_ba6b4d17b33e4a86b5071ce08151c988_15147e4a194e4b04a1d1d89340790aa8_master.jpg',
            '#B98AC0': 'https://product.hstatic.net/200000642007/product/43ldl_3atsv0234_1_31f28f94ff48497d8a572e8339d169f0_24b86010b6d24368bed8021bc036fcf7_master.jpg',
            '#025042': 'https://product.hstatic.net/200000642007/product/07gns_3atsv0234_1_94f475abc2fb43b28ecd05d943f310e6_0c841fd4d919446dad5b0d8799c4d3fe_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsv0234_1_9569dd53e79c4e249845f50f555de468_51025e5d6cf14fe3bd0d7420b1e51d66_master.jpg'
        }
    },
    {
        id: 47,
        name: 'Áo thun unisex cổ tròn tay ngắn in logo hiện đại cao cấp',
        price: '1,690,000đ',
        colors: ['#E3E2DE','#CE8A1E','#AB0E23', '#1A3578'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#E3E2DE': false,
            '#CE8A1E': false,
            '#AB0E23': true,
            '#1A3578': false
        },

        linkImg: {
            '#E3E2DE': 'https://product.hstatic.net/200000642007/product/50whs_3atsv1134_1_39f9c4c104eb4af6a013c3c84544b5c1_7435cf4be89c4f4980668ef54ca41953_master.jpg',
            '#CE8A1E': 'https://product.hstatic.net/200000642007/product/45msd_3atsv1134_1_9ef7d9caca23496dbe2734e4566e262f_7b4bddacac504f998a8acc853a919708_master.jpg',
            '#AB0E23': 'https://product.hstatic.net/200000642007/product/43rds_3atsv1134_1_56194e0faf6440caa9855d3a2b0d3107_48993ac69aae47c3b1d7d88f85c2e032_master.jpg',
            '#1A3578': 'https://product.hstatic.net/200000642007/product/07cbd_3atsv1134_1_5d6bbeb6c2d34ce6afa0140635a61473_caf4e7367c2940d7a718068507bbb69a_master.jpg'
        }
    },
    {
        id: 48,
        name: 'Áo thun unisex cổ tròn tay ngắn in hình thời trang',
        price: '2,690,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': true,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3atsl1134_1_91b07c961b5540baadbc3515ebb0ad23_00fbb063d3c8489c9f208eaac654e92b_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/43bks_3atsl1134_1_07a9c87548ff4c21843fc7ffdacce330_96143bf0dae348c8ae78788cda8cb96f_master.jpg'
        }
    },
    {
        id: 49,
        name: 'Áo thun unisex cổ tròn tay ngắn in hình dễ thương và thời trang',
        price: '1,690,000đ',
        colors: ['#E1DAD0','#CF99D5', '#222D4B'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#E1DAD0': false,
            '#CF99D5': true,
            '#222D4B': false
        },

        linkImg: {
            '#E1DAD0': 'https://product.hstatic.net/200000642007/product/43crs_3atsm1134_1_a23f7b4e894e425aa3fbfb816873fdf6_e060d78dea56433e94bee03367069e91_master.jpg',
            '#CF99D5': 'https://product.hstatic.net/200000642007/product/45ldl_3atsm1134_1_d18c83861a5b417ebc8d7b92e6d6bc1b_92166be2d71f430896aa295606c4f900_master.jpg',
            '#222D4B': 'https://product.hstatic.net/200000642007/product/45nys_3atsm1134_1_d0f8157316e14be5b06c13f8cf8f2565_7b81d9d525ec4b63a2c26282043b1a82_master.jpg'
        }
    },
    {
        id: 50,
        name: 'Áo thun unisex cổ tròn tay ngắn thời trang hiện đại và thời thượng',
        price: '1,690,000đ',
        colors: ['#E1E0DC','#A0CBBA', '#000000'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#E1E0DC': false,
            '#A0CBBA': true,
            '#000000': false
        },

        linkImg: {
            '#E1E0DC': 'https://product.hstatic.net/200000642007/product/07whs_3atsl2134_1_82c8b327809f486dbfa2596585dc498d_ef876ef0c8034de6be3b7ecb0d1b5e91_master.jpg',
            '#A0CBBA': 'https://product.hstatic.net/200000642007/product/45mtl_3atsl2134_1_5d0e13353a0045ae9ff4692f4c234036_7adccec570654e78b23ed4b3b5b621bd_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsl2134_1_ec748a723bb547d7ac8911320335c0a5_02e25f51939349668ba93fd71cfb3c87_master.jpg'
        }
    },
    {
        id: 51,
        name: 'Áo thun unisex cổ tròn tay dài thời trang thế hệ mới',
        price: '1,990,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': true,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3atsl1034_1_abfb0d1b856443b7898852d4a4093273_f9ce64f2e7fa4af6b9b57357b33e0be2_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/43bks_3atsl1034_1_4494af0d89194aeba6692e21e03edb57_3a58280e2bf543abafd52aeb7374506c_master.jpg'
        }
    },
    {
        id: 52,
        name: 'Áo thun unisex cổ tròn tay dài phom suông hiện đại',
        price: '1,990,000đ',
        colors: ['#EBE7DC', '#131D34'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': false,
            '#131D34': true
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/50crs_3atsb1034_1_3b1f4cb4748a41f28620856e86e3ec08_a6b3443816b34bc392f6df0fcecf451a_master.jpg',
            '#131D34': 'https://product.hstatic.net/200000642007/product/07nys_3atsb1034_1_77237cf55ca845c4ad07da14765d0737_7e502cc42f4f4094b3841a7acec9b6e7_master.jpg'
        }
    },
    {
        id: 53,
        name: 'Áo thun unisex cổ tròn tay dài thời trang hiện đại mới',
        price: '1,990,000đ',
        colors: ['#EBE7DC', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EBE7DC': true,
            '#000000': false
        },

        linkImg: {
            '#EBE7DC': 'https://product.hstatic.net/200000642007/product/07whs_3atsl2034_1_976b408584c04ac2b48c3b7f36ae1290_9b6fe832a16b4493a7dcb3ab69416793_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3atsl2034_1_95f383aa132948bb82f18cf7fe9c13a7_93d503a87a04419d85a155ee0d9dec44_master.jpg'
        }
    },
    {
        id: 54,
        name: 'Áo sơ mi denim unisex cổ bẻ tay dài Denim Cube Monogram',
        price: '4,790,000đ',
        colors: ['#191F31'],
        category: 'Áo sơ mi',
        rating: 5,
        checkImg: {
            '#191F31': true,
        },

        linkImg: {
            '#191F31': 'https://product.hstatic.net/200000642007/product/50nyd_3adrm0434_9_7f5d645c5a3c41e7ab797ae65c808e13_d43ed91f4a1348719b14208b1d79e529_master.jpg'
        }
    },
    {
        id: 55,
        name: 'Áo sơ mi denim unisex cổ bẻ tay dài Cube Monogram Lux',
        price: '5,790,000đ',
        colors: ['#292C35'],
        category: 'Áo sơ mi',
        rating: 5,
        checkImg: {
            '#292C35': true,
        },

        linkImg: {
            '#292C35': 'https://product.hstatic.net/200000642007/product/50nyd_3adrm0734_2_010838af95d1436a8598cfdcc0f601e8_136ab171cbe0459dafcaa6ce2acd739e_master.jpg'
        }
    },
    {
        id: 56,
        name: 'Áo sơ mi unisex tay ngắn Paisley All Over Pattern',
        price: '3,790,000đ',
        colors: ['#000000'],
        category: 'Áo sơ mi',
        rating: 5,
        checkImg: {
            '#000000': true,
        },

        linkImg: {
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3awsi0133_2_762ceb852b5c4857ae5bbf641a956f74_85c299b7a4af4b7fa24e0fb1dd1efee8_master.jpg'
        }
    },
    {
        id: 57,
        name: 'Áo sơ mi denim unisex tay ngắn thời trang Paisley Print',
        price: '3,890,000đ',
        colors: ['#6D86AA'],
        category: 'Áo sơ mi',
        rating: 4,
        checkImg: {
            '#6D86AA': true,
        },

        linkImg: {
            '#6D86AA': 'https://product.hstatic.net/200000642007/product/50sbl_3adri0133_2_d5aca140a50a40178f7ca65fd5e5c724_fd1bebb793a649f399f3671fca684d38_master.jpg'
        }
    },
    {
        id: 58,
        name: 'Áo sơ mi denim nam tay ngắn Cube Monogram Print',
        price: '3,990,000đ',
        colors: ['#6D86AA'],
        category: 'Áo sơ mi',
        rating: 4,
        checkImg: {
            '#6D86AA': true,
        },

        linkImg: {
            '#6D86AA': 'https://product.hstatic.net/200000642007/product/50sbl_3ldrm0633_1_77936309c5a3448e8e8fef5be2cc5c58_7cb027ccdf0a4898887959100aaeea2c_master.jpg'
        }
    },
    {
        id: 59,
        name: 'Áo polo unisex tay ngắn Heart Small Logo Collar',
        price: '2,620,000đ',
        colors: ['#DEDBD2'],
        category: 'Áo polo',
        rating: 5,
        checkImg: {
            '#DEDBD2': true,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/50ivs_3apqh0133_1_6ffec3bbdfb340f3841c4a04a8f161cd_013a6b97ee91425ea2e77cbbb7c8885a_master.jpg'
        }
    },
    {
        id: 60,
        name: 'Áo polo unisex tay ngắn Cube Monogram All Over',
        price: '4,620,000đ',
        colors: ['#544E4E', '#323F80'],
        category: 'Áo polo',
        rating: 5,
        checkImg: {
            '#544E4E': true,
            '#323F80': false
        },

        linkImg: {
            '#544E4E': 'https://product.hstatic.net/200000642007/product/43grs_3akpm0533_1_4aa89355983e47058ed0faba625a15bb_238c4ec31da143e4b98caed8dfa8a720_master.jpg',
            '#323F80': 'https://product.hstatic.net/200000642007/product/07bls_3akpm0533_1_86e32d18a108446f83af49a613ddf406_76b0962a0e624c858da39d3f5c2e0252_master.jpg'
        }   
    },
    {
        id: 61,
        name: 'Áo polo nam tay ngắn Partial Monogram Collar',
        price: '2,620,000đ',
        colors: ['#DEDBD2', '#000000'],
        category: 'Áo polo',
        rating: 5,
        checkImg: {
            '#DEDBD2': true,
            '#000000': false,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/07crs_3lpqm0333_1_d6cd4d13de604e9fb4f274eadfd7a866_3c0a82977493493f9ee71ad8edc7ab52_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3lpqm0333_1_59b1d26ff9d744688200d3a2138d3c58_b17b59bc1a874ae0936b29432264124b_master.jpg',
        }
    },
    {
        id: 62,
        name: 'Áo polo nam tay ngắn thời trang cao cấp Classic Monogram',
        price: '5,620,000đ',
        colors: ['#DEDBD2','#BFAE94', '#000000'],
        category: 'Áo polo',
        rating: 5,
        checkImg: {
            '#DEDBD2': false,
            '#BFAE94': true,
            '#000000': false,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/07crs_3lpqm0133_1_22a1fe94f80142e38b54760f6532b04d_db368ba4f5d84dd7ac38c4f3cb14a8f4_master.jpg',
            '#BFAE94': 'https://product.hstatic.net/200000642007/product/43bgl_3lpqm0133_1_48c70d43e0444c08930462a046220105_22ee1206b14447a796634ff4578e07b4_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3lpqm0133_1_cd268495fb954632839225e7fd52d682_7b2cfd3da5fd4acc8b4705ce1f42beb3_master.jpg',
        }
    },
    {
        id: 63,
        name: 'Áo sweatshirt unisex cổ tròn tay dài Monative Monogram',
        price: '2,990,000đ',
        colors: ['#E9E5D8', '#CB9864', '#1F2230'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#E9E5D8': false,
            '#CB9864': true,
            '#1F2230': false,
        },

        linkImg: {
            '#E9E5D8': 'https://product.hstatic.net/200000642007/product/50crs_3amtm0934_1_75ab53f179a44d02bace35cc12fb472f_2fb20ac59e6243b0b70485e489512930_master.jpg',
            '#CB9864': 'https://product.hstatic.net/200000642007/product/45cal_3amtm0934_1_6b2eafd71d8843fcb509040bb67b45a6_957fc41fd90f4e4296486775d97f9b7c_master.jpg',
            '#1F2230': 'https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_8_73e9970307af427e9a41ce90b1a5fc10_f0ccb083f1c84e28a9540a704ab0a4db_master.jpg',
        }
    },
    {
        id: 64,
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông thời trang',
        price: '1,790,000đ',
        colors: ['#A2C6EA', '#A9A9A7', '#33354E'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#A2C6EA': false,
            '#A9A9A7': true,
            '#33354E': false
        },

        linkImg: {
            '#A2C6EA': 'https://product.hstatic.net/200000642007/product/07bll_3atsm0434_1_3ebec5235f084f32b2b48b2ef88ff6c8_e4696f9bb4304e25b99748661a6c276b_master.jpg',
            '#A9A9A7': 'https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_1_2a3db8cfe09f4100934411255efe700f_9cad2e7b796d46bb938981849bcdb5a0_master.jpg',
            '#33354E': 'https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_1_f0d819babd0e40bfbade15250fd69f54_e2ac84b062304cfcac6c59ff74bf4aa7_master.jpg'
        }
    },
    {
        id: 65,
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông thời trang',
        price: '1,990,000đ',
        colors: ['#A2C6EA', '#A9A9A7', '#33354E'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#A2C6EA': true,
            '#A9A9A7': false,
            '#33354E': false
        },

        linkImg: {
            '#A2C6EA': 'https://product.hstatic.net/200000642007/product/07bll_3atsm0434_1_3ebec5235f084f32b2b48b2ef88ff6c8_e4696f9bb4304e25b99748661a6c276b_master.jpg',
            '#A9A9A7': 'https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_1_2a3db8cfe09f4100934411255efe700f_9cad2e7b796d46bb938981849bcdb5a0_master.jpg',
            '#33354E': 'https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_1_f0d819babd0e40bfbade15250fd69f54_e2ac84b062304cfcac6c59ff74bf4aa7_master.jpg'
        }
    },
    {
        id: 66,
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông thời trang',
        price: '1,790,000đ',
        colors: ['#A2C6EA', '#A9A9A7', '#33354E'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#A2C6EA': false,
            '#A9A9A7': false,
            '#33354E': true
        },

        linkImg: {
            '#A2C6EA': 'https://product.hstatic.net/200000642007/product/07bll_3atsm0434_1_3ebec5235f084f32b2b48b2ef88ff6c8_e4696f9bb4304e25b99748661a6c276b_master.jpg',
            '#A9A9A7': 'https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_1_2a3db8cfe09f4100934411255efe700f_9cad2e7b796d46bb938981849bcdb5a0_master.jpg',
            '#33354E': 'https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_1_f0d819babd0e40bfbade15250fd69f54_e2ac84b062304cfcac6c59ff74bf4aa7_master.jpg'
        }
    },
    {
        id: 67,
        name: 'Áo polo nam tay ngắn Basic Comfortable Fit Collar',
        price: '620,000đ',
        colors: ['#DEDBD2', '#517AAE', '#000000'],
        category: 'Áo polo',
        rating: 5,
        checkImg: {
            '#DEDBD2': false,
            '#517AAE': true,
            '#000000': false,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_1_b4ac972faacc4a3386328bf247a7ddb8_9d3d266b0efd401696b5cd75525dab66_master.jpg',
            '#517AAE': 'https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_1_8c934f6e2e04476482ca6e11a1098e68_1880de3b53b04449a7768fc2188ec29e_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_1_d243d24b95bc4f2c91018ed5f4bbdef0_dab59ee1ce214162ba0ec4cf04bac9e0_master.jpg',
        }
    }
    ,
    {
        id: 68,
        name: 'Áo polo nam tay ngắn Basic Comfortable Fit Collar',
        price: '620,000đ',
        colors: ['#DEDBD2', '#517AAE', '#000000'],
        category: 'Áo polo',
        rating: 4,
        checkImg: {
            '#DEDBD2': false,
            '#517AAE': false,
            '#000000': true,
        },

        linkImg: {
            '#DEDBD2': 'https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_1_b4ac972faacc4a3386328bf247a7ddb8_9d3d266b0efd401696b5cd75525dab66_master.jpg',
            '#517AAE': 'https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_1_8c934f6e2e04476482ca6e11a1098e68_1880de3b53b04449a7768fc2188ec29e_master.jpg',
            '#000000': 'https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_1_d243d24b95bc4f2c91018ed5f4bbdef0_dab59ee1ce214162ba0ec4cf04bac9e0_master.jpg',
        }
    },
    {
        id: 69,
        name: 'Áo polo unisex tay ngắn Cube Monogram All Over',
        price: '4,920,000đ',
        colors: ['#544E4E', '#323F80'],
        category: 'Áo polo',
        rating: 4,
        checkImg: {
            '#544E4E': false,
            '#323F80': true
        },

        linkImg: {
            '#544E4E': 'https://product.hstatic.net/200000642007/product/43grs_3akpm0533_1_4aa89355983e47058ed0faba625a15bb_238c4ec31da143e4b98caed8dfa8a720_master.jpg',
            '#323F80': 'https://product.hstatic.net/200000642007/product/07bls_3akpm0533_1_86e32d18a108446f83af49a613ddf406_76b0962a0e624c858da39d3f5c2e0252_master.jpg'
        }   
    }
];
export default DATAAO;