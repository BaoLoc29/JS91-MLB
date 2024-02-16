import { v4 as uuidv4 } from 'uuid';
const DATAAO = [
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn New Year Dragon',
        price: '1,500,000đ',
        colors: ['#83E5FF', '#50C190', '#DEDBD2', '#314469', '#000000'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#83E5FF': true,
            '#50C190': false,
            '#DEDBD2': false,
            '#314469': false,
            '#000000': false
        },

        linkImg: {
            "#83E5FF": [
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_1_1ac4a4eec2594999a1f8ca852eda2c63_c7a6a59cfc1e4bab945a91c9888c931e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_2_8db753c95dd84663b5ba2b0704ffaf5f_0f83c40164f04afb927dbd190951bff6_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_3_12e6d11f6d6046b6aae20046ae9c32c4_e72c3f7a29a74e6085fab310220d5ad5_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_4_c4ca685a3ab5458cb84e8127f4c16ed7_a5852360382641edb9804d3ce843eb6d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_5_ba1bf6d8cc4e4e72ab5988583b93dda8_be8505c2f8b044c6a9053facea5b49fe_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_6_355824503db446ccb25a0ee3ce1c9ac0_2cf8fbab37e1406d944570fb5e08cb9d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsq0141_7_8b079e0e9753400da1dbc3e3ac5c18a1_ba6592206f9d41a1a916de7a60fc5d8e_master.jpg"
            ],
            "#50C190": [
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_1_abf4586c6e234d289f7dfbfa79199a30_fa4da3ca396a4722abb847cc2ca438f9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_2_30b0192237a741e6bb849826619f8034_6ea429799f624e83b9e79dc15eff71a1_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_3_446e771be6c247c3874ae9d5554a41db_fad2b500c8184006ab204ee7953abb38_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_4_c7de2495d69844488b921942f177e65f_e05696b672154eb0b169087d0d00fb78_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_5_9bed8e3c834841cc959cd2d0e298c2a1_be4a0a33daa24479a2ea5b0ded66b573_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_6_140bbfb573334e95905a644df670338f_07e199eadd514ec1be615e7d14caaa50_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gnl_3atsq0141_7_99500be5034943dda79db744caec1b1e_07583b8f6cbc4e40b1e3148b8dadde04_master.jpg"
            ],
            "#DEDBD2": [
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_1_b13da46ff7b74c459bc13b22565bb71c_5a0c7b184d934ec0b16907fa4d11d5f5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_2_d86dbb93ad334302b028300ef87da191_3df054412e684ae2981a247216f9acfb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_3_94eecf3e3e734e89ba544b58ed36eb35_f45b45a86e9b496a91318637a2f4d65b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_4_867f7a729b594d3ea1209016b00a91e3_4e9b0c2f2dbb4c5fac09160651846a36_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_5_b3b696749a8943dd993df696e79782f4_12677d054c9f40cd82d7c03e94c35e0c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_6_07f4ca4c4ad9446fbd05526f6bc863f7_09de5dae00e64ed6bf6642d97d31d7d0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsq0141_7_21f73c4dcd4546318798cd7bcb051ab6_4b557690d40948be8ef3c0c3be08be89_master.jpg"
            ],
            "#314469": [
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_1_ac3a76475c894e00bdb2935ef9379bea_4f63093ef8624bb1973c5a71736ad9e2_master.jpg",
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_2_ffdc7c0d6f734b3d9147be0465fb2eba_e05aecc437424317bc08a9554c09b7e0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_3_735405a25f0449338b213e9817246b2d_c2454a5f834f45a2a1b0f477235b3121_master.jpg",
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_4_1690b48c2c5b448f878a15ad5c16f1a9_c0a54f0d3eec4b448f11fb086efa8ce1_master.jpg",
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_5_54d8ea0499c5498babcfd4a4691b94fd_b5c8e0beff654c7692a40add17a69cb4_master.jpg",
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_6_c6cf31ab86dd4041aaaa547b77f97e4a_f4f4ece0eb604fe593b9630b31f7a24f_master.jpg",
                "https://product.hstatic.net/200000642007/product/43nys_3atsq0141_7_e574918b2a444ce09fb2b764a3645adf_85ada5b80f1044f4a602666c5ece7069_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_1_87aa155f270042b8bb6ebba3db65ea4f_9fb5a6691aa8439481e119e63f35ca32_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_2_ba0f9b99d54643d086931ae767b9883c_1a40cc0cb2c9456cac8bb67cf535b678_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_3_e0129e2e98a24449b350a322d4c20bc2_40396b6e579f444f8d34a6abab1b52ef_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_4_51bb42193333488b9c135d9d62a58352_de4d43a6b774488b8515a8a1753c8b99_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_5_e67efc6d66bb4c5a9967fe85974879fa_33a6acb3e99b4175a484461f0a50cae3_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_6_8ebf7f4b22e649528bd1d4b161dd81d3_896511dc042045bfa1fc2e623a7459f8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsq0141_7_f97ed397c5b04f61ba0c84cba29c36e9_0c5a0192de8e45b5ad874ffb0b74a814_master.jpg"
            ]
        },
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram',
        price: '2,210,000đ',
        colors: ['#000000', '#83E5FF', '#DECAB1'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#000000': true,
            '#83E5FF': false,
            '#DECAB1': false,
        },

        linkImg: {
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_1_e93f4e72c74b45f180d3463c93c7bc71_6c3289e9674042a589a61a43592da23d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_2_332f18b05f544943986b93880c976ec7_0eb9ced01c9b4598a5f9a11f59172f6b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_3_a8937085148f4d0fb662cc4fccc555c8_438943e1a5f4427ea6b40b17b8c5a778_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_4_ae7edbc1bc5a4db58eeb1f0dd124750d_7325f91ff3b74832a3c6e5780dada397_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_5_55958515938841de9221959ceaa1a1a7_70af05e1d7334e2bbbbcdbbf5d742761_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_6_e421ca37202f4d78ba852e37a346c9eb_b16ae94b163142c9833ca35a6bbc20bf_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_7_e2bf376f60fd4c6cbca6ce11ec1fb827_92bf07f4466341f896e9cb47bef43ef4_master.jpg"
            ],
            "#83E5FF": [
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_1_a29b4c00f72848d3816b74f7b064e606_41a0b8544a8c4fb682de9fe9d9a9dcea_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_2_810caa9121a648349ff418ddd23eeebe_9a730eba9345410a8e72f9b817de325d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_3_fcd8492d321d4e64ab131d90dc7aa7bd_5a44edc34c3a4c3dad73529d0e3d85db_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_4_35853e2f3a1d4cbe8addd800bfe3e5b3_1b8951653e4f44418ac109ace6e1543c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_5_5d2e2a83bb3143e68d624a68a8c878e2_84da5a513c5f4fb3b0e4cf45e3051868_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_6_a8bfa50896f2476dba25f3cd3bebf489_5efa1367aa2f406696bba7dc3cbc1efc_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_7_6efb7a27dfc247918687b93ea723048e_158c55dfa43841de9518a150037a6dbf_master.jpg"
            ],
            "#DECAB1": [
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_1_4667718bb2d848689d1f41c6e33fd346_d845693cd5354321a4f96eb6261d4c8d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_2_806b22b1ed624bd581a46b820c564f2b_3505c857e1db484389f368fefcd2f0d8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_3_96d894f122904995af7653f8f0991b80_3e1d500524e54cfca77c7c5228d3fc3a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_4_5cb4c4117c194ee68922f008e0e2b40a_16877f1cb13c4896ac2a35e5ffbf9b60_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_5_1c6c409065444ddf9473ebdd9a1b703a_91d288930f114f968fe4e56bd04c3746_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_6_7a0fb68bd5844e5d9e33a79f361b65e0_6af9934aee3a461da578f90a240b0b37_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_7_4f5319824a6f4c129147abfe773dee4f_082aa77e5b83444dae63b1a46c46ffd7_master.jpg"
            ],
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sơ mi unisex cổ bẻ tay ngắn Mega Dia Monogram',
        price: '3,650,000đ',
        colors: ['#83E5FF', '#DEDBD2'],
        category: 'Áo sơ mi',
        rating: 5,
        checkImg: {
            '#83E5FF': true,
            '#DEDBD2': false
        },

        linkImg: {
            "#83E5FF": [
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_2_4ca1ab41c64c40148e3c1ab44a2909f2_1a30367667d6491e887a7d9116b83116_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_3_00a1e04e4952470dadde93a905539209_89281dbf874f44399833f809e5dc3668_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_4_64b164a973ba4d9f8e45ff199522244f_15c5e5578f0e4c7b885e8243718b611d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_7_4fee305c1b1b416ba556cc1ccfda129f_037a5410d6794faa84636525bee72d2a_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_8_972dba52b0d9422daadf752f06139944_7efabe85ac8a40e581569af6f56deafd_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_9_04389b4eda9042f2bbfec07baf26fe7d_d56487c4f2be4501b086796a1697cddd_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbs_3awsm0533_10_ca3f7cc72702499398d6f0c7a76c0228_30852d756cdc4eefac2e251f6c485364_master.jpg"
            ],
            "#DEDBD2": [
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_2_1c814d4400434ae893d32b0c4cab6de1_87345655e0214e778f96f65ee45e2aad_master.jpg",
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_3_5ca982f7d73d4182a0a0bb16193f9a12_66bfd83a1593461fb002d729751ddfcd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_4_c752170cd27b43c7930c848ba7779b3a_db61a82e8cbf4cd68873e55e2744af7b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_7_ffa05ee6b94e4e34b116e50c6c242bb9_cc19dd1c0b174bb08e0987472fb42dfb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_8_1f829e2c846b40199028811f8e78370e_942662af7de342eda545cd9ce68abdc7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_9_0ba8607bb92d4c42965b2590cf1a8c8f_8cef1ece77344153a9cc84ebb4a19f08_master.jpg",
                "https://product.hstatic.net/200000642007/product/50whs_3awsm0533_10_72ab07ca241a40fa96e295fac90cd799_81fd0b9cef2e4606a9badfec377919c9_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            "#DEDBD2": [
                "https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_1_b4ac972faacc4a3386328bf247a7ddb8_9d3d266b0efd401696b5cd75525dab66_master.jpg",
                "https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_2_de0ebefe68844792a14e164aa407af5e_1c8566f5b2614b0ca80d6632edc3e032_master.jpg",
                "https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_3_50d2db176af14ee8896b97b1891e5b14_2631cb74752b4d549acb3658aab9e500_master.jpg",
                "https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_4_116961f9066844d0b16fb314f0479eba_eb2e3c044572414cb85b31560ef80147_master.jpg",
                "https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_5_f6e73568bfda4e16b5af3b675d9fddbf_b960f513155640229f543fb9d96bfc24_master.jpg",
                "https://product.hstatic.net/200000642007/product/43ivs_3lpqb0133_6_bcbdd076942e446c91c4d2d8119cfab8_f190429776f7445884eb3e7be5119343_master.jpg"
            ],
            "#517AAE": [
                "https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_1_8c934f6e2e04476482ca6e11a1098e68_1880de3b53b04449a7768fc2188ec29e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_2_42a89a7702ab4ee3a3d1901a358692e5_7f5c77e6728a48cab058985ae82068f5_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_3_074cf983c9b54f16af262f23036d3b2d_e94ffa9f205940c9aa73113d7f60e8db_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_4_30daaee378b84dcea6c9a2c824e90977_be9491ca8487460d831a38a04aabfa3c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_5_a32366ae71b74c91bd726df08d87d8d5_a79378b698634ac4bbfed19716bc3301_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbl_3lpqb0133_6_fd6219f23985471fa2d50880ed3d732a_2d7a60dc6e134a59a32e77843faa5eea_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_1_d243d24b95bc4f2c91018ed5f4bbdef0_dab59ee1ce214162ba0ec4cf04bac9e0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_2_3907b40a6c9f406eb37eb44a38f90222_fc4e4cf242cc4d00af5112009e199fcb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_3_9d8ad77e5d5d4403af9078487c075fc1_72e1b07a3d8b40f281d0acc9d93b1181_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_4_bd64adf782cf47a4b37643e622d2365a_1afb93ad6ed648d6be214236147cc0dd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_5_c8ab0d9f8eda48ff8e62a84c7c906888_5dd300242a7541d492d2bb4ef0196359_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_6_082d0f88079e4c46a4191696e9c44819_edd94712cac24debbc8f6843e485af2d_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            "#DEDBD2": [
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_2_b13275d0b7d8410cbd77419d02a72cba_6cbc099abd7149f8bc0d6fe82c7282f2_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_3_92c1952457ac445491d40e4a11088b32_29ea3a80328744f386dab5ee85596fcb_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_4_fc2ff0c5d20848d5991e01469381708d_d11be47785424442b01354da3aba5303_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_7_76d11536c9b14a38b4b7b67bc81707a9_1ecf2be265044d47a9f842e7d80121ea_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_8_d8180190ae9b4ee0a5ba5be076928b7d_b0803cdbbf9e45f788f028a63d5a1112_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_9_6a6339cfa3e548eab06df6e21bb25fae_3683bafb71434b83ad1465d1f7209aa8_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtb0434_10_64f6351789124d3bbb8439aad1326300_b4466d9c1c9740f880af340943a3b325_master.jpg"
            ],
            "#442922": [
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_1_d00a2427af564dcfb88e0305773f4bfe_ba45ef50405a4a1eb051537705fdd390_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_2_968b743e5298482488aba9f763fef981_332185d49e8d41a8ad2bd38af0ff77a4_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_3_e03c3b1aa79447da95042010a04962a3_a5d8e0f2550045af91974032daed8ad1_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_4_6e4e2fc2a5304d62887bf3edd0417e52_a2d61f286a2c41efb59f181f4667a332_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_5_3c776139bb3440cb997959cf1ab7ca2b_2b601bb8008247ca8f2c3af7bbc9c725_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_6_09fafb2e34df473a807db3e08d6d1aba_0c6d9ae39fd346f4b65c98a82bf3441e_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtb0434_7_1b10a628cf0143bab8f63ccf97d4c650_1936c5a186114323842f3e5fd84d8207_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3amtb0434_2_27705e7e6afd41fbaea0349ab50025bf_c59cf152eb7f4e21be5b83c856c06973_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb0434_3_52cabfb9b3c047b691d878f141709281_916db7e4eace4dbc95f0bb20ad6211d1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb0434_4_19f4e34c294549cf9f513d80bc1e903c_5a94654cb5f24a048c5f389b5a60b201_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb0434_7_48128540f78b42f0b23a78085e42d96c_b31866ee2c8a4e648bf5b2ae17f0e2ec_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb0434_8_1e22eefe5e9645428fc93502f2d72799_d9f6171737464a44bce21f62f7e36d4c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3lpqb0133_6_082d0f88079e4c46a4191696e9c44819_edd94712cac24debbc8f6843e485af2d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb0434_1_a9e8a84c7bae4525b45a34655042d9d9_3a2487a92c9d4fefa2927877a2cedd44_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            "#E9E5D8": [
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_1_75ab53f179a44d02bace35cc12fb472f_2fb20ac59e6243b0b70485e489512930_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_2_4b8f1d04019f4dae975b29dc89ddc341_4a088411c8f44cd399af0291f46ed54f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_3_ffd80b9e40254f8e8ea1edd29b5ce55d_ab5a7f0701d14e4eaf48d742fc7fb6f0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_4_2d8fde1255c54705b0eaada623aed1b3_3a3b83c1d16e4649bca5777b23447ca7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_5_34540fe83b6344e588134b0d85a1c235_0c1925cce7d74c5c98659b7b6348ff35_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_6_9aa1d53d3e6940afa75624e7d781b619_e60cd4352b7d486bb6366c1bf769cc85_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm0934_7_b110ff6074b047d293086d1e3aef9780_39b42def5ee94392a7aed00086417873_master.jpg"
            ],
            "#CB9864": [
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_1_6b2eafd71d8843fcb509040bb67b45a6_957fc41fd90f4e4296486775d97f9b7c_master.jpg",
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_2_5cdbd1b078e94b1eaf29fdac577d53d8_110117d0cda6415b9d15cfbc35f220e4_master.jpg",
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_3_269b51b335ab4b2380a14095076f0b35_9c263c1582024cfcbd224a9433ff46f5_master.jpg",
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_4_f31b95a707b34d56a1e268eaff51b8ef_79cc8c4e889f4df4ad5088a62b3969d3_master.jpg",
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_5_24a62a14aade40b79b2231b2cc9fde79_d4d763567eb54817840349814ac8abe5_master.jpg",
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_6_76dfa8d7b64f49b68c88ad8b15831237_19c84e1ae64a467689d617a249558267_master.jpg",
                "https://product.hstatic.net/200000642007/product/45cal_3amtm0934_7_831e40b9d142434784375c59b3be9dfb_432e2a78af3847cfb8bd869100b511a8_master.jpg"
            ],
            "#1F2230": [
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_8_73e9970307af427e9a41ce90b1a5fc10_f0ccb083f1c84e28a9540a704ab0a4db_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_9_a270841f46864e68a1d91f596cc1ab4a_bb9f0f673c0c4b619950af8799175b72_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_3_00a3c1d25c06445683a9efa7532f23d0_443de1d5536947638fce68b427b00edd_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_4_1d7b8f252f5840b4b68f61398f1db3c9_5da5f7dc51c746c5904e40177fa60037_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_5_084e9bc004764b0ba41ba3bf4c406c3f_3bd9461d62b241cfb4a5b351c252d79f_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_6_349b5fb4eafc4ce4beda08e5a9fcb8ed_b00972cb33b4439388585471a09bdae5_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0934_7_f962cb1b53a34dc1bc4008bb236e9a29_981a09851e5f467e92a12bae7b0d8945_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Mega Bear Winter',
        price: '2,990,000đ',
        colors: ['#28396F', '#EBE7DC'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#EBE7DC': false,
            '#28396F': true,
        },

        linkImg: {
            "#EBE7DC": [
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_1_ed34d0bab98a4f6b8992060f21da36f3_95eb6dd60d8f4a97be872975bfe15fa9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_2_dd3a7c399557494d9cd3e9ceba0a8b6e_d2e8314f666844138d2ff79ad6df4191_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_3_096c38e348b348be960461e64ee12cca_ba2ef0103cb5489a8a2971ed2beee93f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_4_5de1b248fce843718bffb0a1a0a5f695_c0bbceb50ae94b49b2346319040e2bf1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_5_596f52e24c844921afc6c85f029f65a0_4cac050e1ed84484a657ca7a62cc71a3_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_6_ac4dabddd3e24daf9e52a54b24efef0e_0986ccd84acb4841b6464fcecbebafb5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amte0236_7_4ad7d1cb06044761a5aca93a172fdb18_56306f136860448f89731eaa6a9175c3_master.jpg"
            ],
            "#28396F": [
                "https://product.hstatic.net/200000642007/product/07rbs_3amte0236_10_c95b2165add84bafb07a645d3a9c0733_1682ef287dda478da20fc053d1185970_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3amte0236_11_860ac2d8a2304671a2b43bc8253ea90a_24bcc05a5c5e47308a0768e593c351c4_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3amte0236_5_61795bda301d48cb9002d5a74287195a_43ac0ff14dab455f9be87a9d8da3b7ac_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3amte0236_7_3a694a5dfa2c420fb93b244f785be3c6_4475f33b9c4f442a9480f3e031027fe2_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3amte0236_8_9e091789fcbc406ba5e89b0c21dafe70_b38f56a4aab6447088b93930ae04d75a_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3amte0236_9_9be5ed54b5d344dbb82a392442aabb20_29a749cdc8914be481b7d6dda4304ed2_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Heart Comfortable Fit',
        price: '2,490,000đ',
        colors: ['#000000', '#DFD8C8'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#DFD8C8': false,
            '#000000': true,
        },

        linkImg: {
            "#DFD8C8": [
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_1_3592698678e8415cbe5ff7fdbba84bcc_07bc65febaf54dd680feb7094482ee6a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_2_0323daa34359462b9def554a24bd01d6_a40569055d3a4869a9dd0539cb7eb9e8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_3_5d6739191923449e87f0f2ca82792e62_de61448a09964a8dad15da76ca6e3f19_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_4_594a2728682848d78968d59274d3230d_796776c57d33410b9ed02de98a515f6c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_5_1d7cfd1d4c2c42159765be5b43156762_573178f000f049df99372cc9cfeea428_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_6_be62803851754f098f43c99b7ca02a1b_cc0192ea458c4cd4b0457bc8df97350c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amth0234_7_8b619b266f154c94a8474b8e58dcff46_753d732309d64adb9663e5e0cc4afd7d_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_2_58e81f5a00244d90b84699588a356a71_cd799d66adfe4cd1a90348483bca3a73_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_3_a8f72066c8ae4831bb03f7cab7f9edd6_fe7a29848fdb4000a4b65fe1f0286339_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_4_8c5298741d4c4b8fb12cce5836b02b06_dfaa10ccb0994a5f85dc7ec02b9b3a0a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_5_5e168cb66c3b4150a08719c4ce270d47_0d66a694804d44cdbd7f8b9fb04e6dbf_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_8_9d6ea214b5294f9fba646117b138b210_cca28c95a2af4a47aabbed24218156ca_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_9_0342122bdcd142c0a1177ebf417cd18f_f692fc7bc56e4a81994fdf9fc1418c7d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amth0234_10_c801f10a231742578005b495c48166bd_4322033004b14d76b42059d63a86cc51_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Diamond Monogram Jacquard',
        price: '3,490,000đ',
        colors: ['#CAA06E', '#55352A', '#000000', '#E3E0D1'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#CAA06E': true,
            '#55352A': false,
            '#000000': false,
            '#E3E0D1': false
        },

        linkImg: {
            "#CAA06E": [
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_8_2af3444c18044b8cb3af0a7758972ecb_a7caa8f5e70a41d4ab82de021617fa18_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_9_7e025bd6213c4c9795459e95bd195bc4_6d0169d7e39940a5bddbf05848a85a36_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_3_ea0f77ee2c464504952d8e892c96d737_e28bc9732cc043ce824215be0f4edb7c_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_4_fc3aaaebc4354d9daf3384c2599b2f63_b44062e00cc84459add983fc1a3d1056_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_5_07da0a81a228482f91e2be65283e9c75_920e3c2704004015a66b188d14e7a4fc_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_6_28c34152194f4fddb64144c477b6fbe6_0e473efe08854870b56b8ae18ea79919_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cal_3amtm0134_7_fa6be0cd8be44918800f3b101b32c1b2_c002553d1ffa4c97840920fe94e3c2a2_master.jpg"
            ],
            "#55352A": [
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_1_752a7c1142a94424a5b00a4015c87cb8_7ad60bea318a45b3bca80121584b1df3_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_2_63c59c4b096e4863a49bd8e0c44c844a_547424286cf6479ba7ae249326149b2b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_3_5f3d451335fb4e0e8c8ef218ce4f7789_4065962b9602477babc3badac4b90218_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_4_dd34e9cc37554fc49862c26f3b67d56d_d1ee9557dba64a29a843d19d88928865_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_5_c8a73913d2f64614b28d358370480776_6ebe6d0fec514901bd2a630717afe4bc_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_6_639d46bb514d434993d3c8abdc514d66_3492c2bd49f44f8f893124b94c017e47_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm0134_7_24765fbf2f304ad4931de56355ecb2be_7893fabf9d1e4bcc90d4f9a9180f644a_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_2_d48887f32aee4cf79e2e3ce2daf88783_8ab1012b49a14132b172a1f68ef1fc80_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_3_3ac6a56ff58a447e8d2e90d41e2a3ffe_3bdc94f913d34a7ab98ffc0de5d6db88_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_4_29c1b46fbdf04b8db39f32bc8f0f91bf_a82b63632318425eb870fa532570e128_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_5_5b70d6ea5c2d454b962f0b5c658e7a7c_b626411638944b2da9b090809b648d26_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_6_3d291891817c46458c70c148ac5f21ba_538a711de15d4eb19328f8c3ce8f7e5d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_7_00f12f469b304e369e5ccae33e460e90_a51b7297757c475fbce014f109e47218_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0134_8_6955978d55fe4a34a65b9df815a4b1ac_9d3ae866e67d4c5498cf54f9bf7bbc57_master.jpg"
            ],
            "#E3E0D1": [
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_2_69e7223ca7d34b2fbbf8d4aa6b41b691_b7e2a8242b494e5ca7d1ec833eefe2ac_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_3_24dfc69f006e4192b78becc48c08fdd0_d422796f33734e2f821e9f617747ffef_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_4_aa49ed24ac604d588ea5139ba67727c7_257c751ecc614936bfaa0e0ae2090822_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_5_134561fd2a4a4174b29bf32967bec11b_92bcdbcc25f64f489819183820d5d8d2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_8_3570ff800541421190a474f7f82aa25c_74279aa5a4344325b8d2cf52a9729c51_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_9_5df276b24f114d439336a7c73fd3486b_9095c85f6437492288fe341a5f502e11_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0134_10_a6dde8d03df446b78501260d49e46364_257bbbe2297b4398bce74604722878d5_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
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
            "#171E2E": [
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_2_371b46fdd9204cfba5270ccdb0814308_adad8e54b65d4d2a9e1ffe6fa1879817_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_3_bee9f365c4074816aaaeb0578e3f2a38_c16181d100944536bf9a97dbd5b566ec_master.jpg",
                "https://product.hstatic.net/200000642007/product/43cgs_3amtm0334_4_66436908bb3b42cda053eda91feb2e6a_f86d2a28254040cea1ee09cbef81236a_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_5_d9ff06249f924f38ad37ef2735b720fc_19cec628a7b54c4da36233beaa2c0c35_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_6_e6e0535b40374684bcd481889df75427_819bc3693a8d4e799d3712a8e8bf1667_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_7_596e9c8219964db799f89c8006c84c92_742e054b50d24b01b43f02f9b691a107_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0334_8_bf68199f9eb74b52929cdb9b9282ae7c_85c9a6c3df15440eb8b8c7e481d4ff81_master.jpg"
            ],
            "#5188AF": [
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_1_162b87d4ebb04120a6b3080bee287a6d_299bbf20cf2e44bb81d03277fa181950_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_2_f4f0a30d0c6648dc8b6d5d6bcd694798_f38f3db66c194346ab1731520fdfaedf_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_3_787154c960ec4389a73de9a4db721504_90b889e3ff774d07a3ed39dd9d5a930e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_4_333b80cfaf544733a0f51c8fad58af67_9bf23f063bc246a7b8a870cdbf25664b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_5_c5bc19e67f9e4e5292207ce63712a691_19694f7b975a4a51b62d17bff307a360_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_6_a8da0ab402664e3aae2aa3903bb1f880_c1ea874bfd564b4080ea1d7a5e34d801_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3amtm0334_7_a58431c28235482c836a95ba40bd8f09_b312ff5effa84b878681b08c718c5f7c_master.jpg"
            ],
            "#DCBCC1": [
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_1_d12fa2f504d445ea92d3c5599f55bbc0_d80154bc4b5e4027b5bd29a53015b395_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_2_1dd97ca8ede24e8aab125a4386d85cfe_b1d06193d22f40aea2f46d5758e37ec0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_3_5190d575efb24395ad4b016315232e88_3f22414c9cf94ff4a0e1ee8bcd3bb691_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_4_f0b6137d0dbc4e5f9c25e19373851395_39d2a5cced2342dcbc6d123de466a635_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_5_5ae3973657774abcb68b8dd63e28f83b_05f7aff9464048698d7061b60ee5e5b0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_6_553434e530d4419a8e38eee13ac46b47_a1bfd649ff204df4b30bbb0aa6f44f98_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0334_7_3461fb906acc4c1db9d269b91866c074_a46c33ad09f844059ea5845f4c7ceee0_master.jpg"
            ],
            "#DADBD3": [
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_2_4b73063dc7e34e56afc0b7e7f909800f_e45afe60310e4e4fadf85a601dcf5f1b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_3_fc9661749fbb4f76989735d3d6d2753a_4c70f86767c842c6b860f34dd1998a11_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_4_45b4d88ae4924f039626c46395c1903e_d704272b009c433aa3a832db03cfda30_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_5_388c5d62446b4a22b546b946ca2ab00d_18052e9491fe4aab91104add74d1c14f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_8_e0f737a8f1e2448099e666b0022f460f_daaf931b4c224f359b4feb6e19f75389_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_9_11b8859463d142659f022cda73587912_b49289c9cecd4f42b6d6439a92a5089a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0334_10_fe989a90b7ce4d29bce278a397461952_984b7834261f43209b805f4b11e592fa_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
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
            "#EFC3BA": [
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_1_78c914f0ca4a40209566855eb1de922c_dbb6793d4e554a87854bd64e2fb2aae7_master.jpg",
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_2_aa06507d84454b728c33364e5f610216_90864afc63ec4b0eb6ddbf9d8d838417_master.jpg",
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_3_b95af71b6cca481a9707c75e687ca0bc_fb4448dbbf8042e5b46c4f9d08e07ac9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_4_a5c2cbed98e64694885fff5e56d0b3b3_a7957ac446ee44229550b4ac1ef56275_master.jpg",
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_5_444af03427974567a3e6c4a696e9d243_d5f29378880d4c13a3ab4ea08da82bc8_master.jpg",
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_6_dbaacca37b7945c2b045b9fd2409065d_a9ff240c342043b5b8f6cde284ae3e99_master.jpg",
                "https://product.hstatic.net/200000642007/product/07pcs_3adrr0134_7_33a1c71fcdab4d6bba039a4a48820ad3_bea4909270064d308cefe91ad45d8a2b_master.jpg"
            ],
            "#3D608A": [
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_2_20dd3c7a343a40569255423833143e5a_2c77a9a24c5241e180e5aa95475e1032_master.jpg",
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_3_a1b45f9857e14d3f9d8ca5d53b1ca12b_8ff38a05979e4c8fb7af7bd0fd77398c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_6_223b3560001143dfa1478527e27ddee3_894d9a057dd8445bb36eae1af035b010_master.jpg",
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_7_510647f05e664791be0e4b31fb20734e_d7c10da1078d482eaefdf37a0ccf8436_master.jpg",
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_9_3282567411da4cc89f6c35bf229a4f27_17eec3a6b960457eae015a401b1f8fa9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_8_00b0f93adb8944479faa35aee68d57ff_c1c670a93e004d4fa54072158ff1b0ad_master.jpg",
                "https://product.hstatic.net/200000642007/product/50ins_3adrr0134_10_a35be369b2664ad89937568e2c3c0c54_9b7711d6a2fb448a9ffb731a10fb5c8e_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
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
            "#EDEDEA": [
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_10_e58d11e30b794db7ab7e8de0f6b7a4e7_99a90290ade94f22aa0c9e111213f899_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_11_4de717e05c6c4df1a4a82fada6c1db71_bf20aef741b446ec9aec5d77abfcb7ad_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_4_a8e726371e5b4b348e4f48b3179fba59_a6add64403e749ccadc8706b8cbc7e6c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_5_456412764cb14948b7d0580617b5b87d_480a6f5419b94fa4bcd21ae972082318_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_6_9bb570dd815946c09ee6f1f9e7deae72_d253cff8a639417c85166d00bc8d3a29_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_7_50025bb1ef8346a794daf6a7f5d9983c_ac4767897c3e4a12b390a694ada21e0d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_8_162baef9393946f99c81bdfa2a8338a5_024ccd000bdd465eace651b97e9ae813_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3ahdb0336_9_6844244f7e02489cbad36746ad6221d0_498b2fc446a54747bffb3bf9810b1083_master.jpg"
            ],
            "#B7B9B9": [
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_9_517bdcf399754cf2845df8c7f4771c23_dd08e3dcd70145aa9a8d5c89f11a85b4_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_10_e4fa57448b714c89add8c41a1f16ab52_c94b7ce7e1074fdd824db4e50eab9400_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_3_ab6d3ce7e9694851a98c0b0f8e35f120_0764cdf86ff74f9e8195aa2c419b3052_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_4_893ad7e2bd1e4ec5970a9571f3992dd4_7c42c8f291764fdf8bf817590889eae7_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_5_fd79e20d1b0e44a4a22b88e25e21e4f9_0bc6326527b644ddb132d23af225bc5a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_6_2b8fec50907f468ebfbeefd014dd4bf7_de6357c2241f489a89653551196d7bde_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_7_999c177a09af46698fbbeeb2527bbb5f_8988f6f2326e4902b397b29d0b8c6264_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3ahdb0336_8_4528905353fd4ab89c7ce0e2ae4ea82c_c3aefad0dd794a0ab907f736162e4177_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_10_da89d5388b7f40848a9064d75dc1e621_4d5441ddca80491583a326155d2e1eb4_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_11_8bff15256c8d404b9299918392834747_d65a5c61f8fa4ac9b3515c5d9a872d91_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_4_d9087dfe48734e2e8bd0bd92f3822c4f_8d789f81d2514e7c94db92b0a6603a6a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_5_d3a335985cd049b79e4138f02437c510_123d2de4bd0949b595fde74994220ba6_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_6_0d957a62832e459ba57a514c0d2974f5_6223e24b21194a3facf6df13e2169054_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_7_747a948fc0c648f087ff4a20b0c39655_e5ba1458cdb74e87932b12324e9f4905_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_8_22093bda08bb4f768c0a27aaaa86f6d6_6c449a615cf24d798bb68b920d3e3776_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0336_9_31c721e9aa224b4b9725d9939917b0f0_a594bf82d61d47e4974cec507309e8d2_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo hoodie unisex tay dài Cube Monogram Big Lux',
        price: '3,290,000đ',
        colors: ['#F3EDE1', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#F3EDE1': true,
            '#000000': false
        },

        linkImg: {
            "#F3EDE1": [
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_10_4c3ce5b8f808499eba35c1730aa81cc0_daf85b970723480286dd80f9afafe878_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_11_fa72f5b4f8a045dd86b5d1c35de97048_1725c48b2a584c88aeff64463862e78a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_4_674e03cf1e57487fbab8d3b1f035c90a_c74d472fb6ad42c3bdc36b2d7d724e57_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_5_918b27e62fa94a4e953d57be6ecedf61_499c6c4377cd41ed95c5c07d9926ceea_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_6_501c73028452418baa419c79993a736f_860c989da29146db9367585ba1f9deac_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_7_7d09945535874085b0afe67b5c8adc55_11d0dfb19eea4a0b870a637887610af1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_8_883873c955334f72abcc1f21bb8bf879_4adcb3c41df34f029964ae9d3dfb04bb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdm0334_9_7776b855a7d3476f80a24bc93c6ae6fa_0d86bd87804541e895dd893420ad380d_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_8_e10c820cda70472c9ff912628cf686b7_f2781af6c7ec4c38b701569b710fdab7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_9_6403517969a24d31b342dfa78ff280ae_ef9f788fabb54e77be2dc4b8c5a8d283_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_3_471a2627a00e411783bf0d1c42c2dc01_52f0aa40c5b14b15bd145d9e46493fc5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_4_246d225c96bd433596dd60669dd83e91_6f6a027b99de4cc8a30d5665ff1d841f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_5_019e2e9eeec04fdca402351e3bd7febf_f7e7e5639ec344039d4ce348d2b31984_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_6_14fa9f35c5b84e0f8172125f7a3235ba_bdce365c8e9c4703b54d36e109e6dac9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdm0334_7_a8f65f4238f24b7da5b6afec17913fb3_0033582784ca46b5a7aaad82f6bcac72_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài bo gấu thời trang',
        price: '2,690,000đ',
        colors: ['#A5091E', '#143A83', '#D68C05', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#A5091E': true,
            '#143A83': false,
            '#D68C05': false,
            '#000000': false
        },

        linkImg: {
            "#A5091E": [
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_1_06cb8f72a3464655896c39013f77ce43_a2519f70ded844fdb7b0d5c93c73674d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_2_0cff38372c89491ab24233e1e8147143_4f458bd3b25d4797abd2e2609174c5f6_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_3_59a6cda425d6475f806084b7e89d6819_1e2b806f3f14482da7c058f900adf17d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_4_ef48cd0abfe9408b9e7010f2f9c3cd99_6d5f0af56b2e4b1bb48560bf2eee3e0a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_5_6f506bd0fa804f7fa47ae9df2c7d2a26_1ec98fc7422440e48dde793080b18039_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_6_7f0bf84d5c3c4b84b6c9df04b84b4369_50b332154e1d438cb773ebbb5ec91426_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_7_d2468a7024b94f03adb6baa3609e8962_47733bed5f8f403fb4fb5d0c6f4d8654_master.jpg"
            ],
            "#143A83": [
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_1_cff56afff5ed4e8bb8f0b072c71fd203_8037a2e8c2314d90bdc29a2263b8e7b2_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_2_4f8e0f540630464494d1dee3a8043efd_76cc425232bd43d18383eb45fe143c0c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_3_f69429b90e354cf4af5c26f1add77a04_5d6ad8d560b94b30943b3efcde3284cf_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_4_511293fb74274f2980da265f33d5e625_e54cd68c8f85479c9f06ce73659b6a84_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_5_8f3a9105aff24d05ac9dd14378bc4e3d_c46dbc3ea7094e829daccac26ca034de_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_6_00f0b847455b40d580a8a998f00108d0_81a107212a4b4a03b63e2d79e1bb0998_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_7_3e9febe7a94d4cf786a1dacf1645fa8f_f32bd13ad291420ea28aa0f2799e490e_master.jpg"
            ],
            "#D68C05": [
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_1_f2b0b90a30ad4d9caaf33e205fe7d433_f3495d0914e940cfa53eafdd08c92d9d_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_2_324fc287346f4d3b8ff9d2b33ab4d9f0_42bc9843dab94508b9162aaa3400a1aa_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_3_7d8d8e83786d4ba988b34828a99cd13c_43fb2afcc4f84cbcba18f7a1ecefecba_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_4_229a4b5999854ae4bfac0afb0374a131_1599c0cbc7134ed580c73fbfb93486c4_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_5_f4797a70d79c4b8fafaf1d375f075a31_ceedb52a1f7c43fe9830f99193415fb9_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_6_6d2174735bf44ec394325e0dc591759d_abc21d719a394bd8be63c488e4d5843f_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_7_2afef0c8607749eba603593f7f78398f_189b8f7043074c4c8d822cd8ae0b73cf_master.jpg"
            ],
            "#000000": [
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_1_28a4b7fee4b349478b3768dc6b93384a_b32380ff3cf0461598e8a90b17d0f1e7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_2_941ecdbecba1404281beb1e0d32b2a6f_ed018a448242428cb8e92228dca721b2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_3_2c67230e0b73493e98bee5ebae6f30b0_95470870b9884182817d2b443b647331_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_4_f3e76d19583046819d43288819b71632_85e4e6e5679d48b687c550679f9e972c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_5_759fbad8c9ce409298d0266b8212b00b_f7fbcbdb1a5142228dbedff0ba361922_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_6_2eb360d6a47e4392b5213f5090f5d8cf_fe1ca7d5ea4e4e949e0318c040a4b5d7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_7_aba0eda6c3cc4888899c4ee4c9a28af8_76e6c7fd3f334ecf876f81b2b77d2cfa_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo sơ mi denim unisex cổ bẻ tay dài Basic Multi Mega',
        price: '4,690,000đ',
        colors: ['#E9E7DA'],
        category: 'Áo sơ mi',
        rating: 4,
        checkImg: {
            '#E9E7DA': true,
        },

        linkImg: {
            '#E9E7DA': [
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_1_77b74405062c41b7b42d15b75b0666fe_f5517eb4260e4423b47cc0180e9afa8b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_2_672f64dbb4b241b3bcb0400b5b89c2fc_71e86989c9094a1495fb016cb58d7dfb_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_3_dd6ce3f244634cad8356ce40de41ce6e_de2b00b5ce3c49eeadab659397bce640_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_4_4d3f6c058e474676b9eda025348e49b8_5628a1c31faf4be5b02f1792b6a8c2b7_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_5_ce259fc560d642f48fe3895c8e145b22_737b42212c184f6da0ad9c3397ba2c0a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_6_00ad7ff811154eb98f854ca9949912ae_89732e56535948e5a424f344ca81a87c_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crm_3adrb0334_7_7e7271edebe5445bb93d4a22810a18d6_7774afe5892946ceadc8b49394b53345_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex tay ngắn in hình dễ thương thời trang giới trẻ',
        price: '1,690,000đ',
        colors: ['#283069', '#F1ECE6'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#F1ECE6': false,
            '#283069': true
        },

        linkImg: {
            '#283069': [
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_1_2dde617678bc40469a9b135f6af48d18_3878eba6e036401680c46c486d320029_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_2_fd2bb1d727e040979f754e159d393630_335cdfb060434b9b82e6db91ea3e8ac0_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_3_28a444664c9c443bb1af7da3b15b52a2_220e5aba29c944aab5166e31e9a93653_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_4_a289ad9e1d7e44a6b54c9adbc5102985_2cfd0a79d1a449699d9f0f889848ba40_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_5_fabfb731a8b64b01a3605b27d6c8f9c5_fdd1b0487d76441cb794dbd2cb4a991d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_6_c3d8751e34644585aa5e5f1a13849564_42cfa1b720d144a185eccf62c5307839_master.jpg",
                "https://product.hstatic.net/200000642007/product/07rbs_3atse0434_7_888cf7fce14341d780468782e86abe56_26b336f40ac041d49aa79413f2ca1c62_master.jpg"
            ],
            '#F1ECE6': [
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_1_25b2991a47af4f37b69b0da74948f34e_15f7dc9413074fa69c53484885ca0724_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_2_df0c9810495b43dbb970e913197a7c63_e0879aec1cf74004b0284b545c91b4ec_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_3_5822400ab1944b8c99da101c0f4396e6_a9acdb9cfb994dda83718453bfb559a6_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_4_7f07d327d43e4feb912114eced8ef5b0_8a228a1a0c3c4e3583244e915e6154f8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_5_c6ece35bd5c146c987aea141feb5996f_c9185d5ff48d4eb0bd7d2ac4f86b918b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_6_f5dd8b851408494090d0edec4dc9c9a7_e0ff0238d5d94058b7d52a0f225f99c8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0434_7_4d042621d4cd4f6ca21c91bcd5fa2d8e_f74db19dd7394b7b84c7d649bae81708_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn trẻ trung thời trang giới trẻ',
        price: '1,590,000đ',
        colors: ['#046250', '#E5E1D6', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#046250': true,
            '#E5E1D6': false,
            '#000000': false
        },

        linkImg: {
            '#046250': [
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_1_4b391a9f09984704964925c5e6f1204a_7daaa893ca854b268c00bce40a8ebafa_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_2_ccad4e617e4a429ba3144b89ae96fe57_321d5b5f15014a6dbae46ffef405aa42_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_3_b8c216f8239742839294e1b8debae0cb_e8c5aee8abbe4d33b1e0405ee5709310_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_4_458c2dbc3dad446092bb1a1478aceb67_5731c293e2fb4a08bd8fe3a9bb7c8426_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_5_94a28d77a81b4b59b255fb4b99b6e45c_1bde77dd9d1b4c79aad598fac9d7b62b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_6_d121349a618b4a72a6e13d7ae0d4cbaa_62496f26a2174d0f8b246acd86f2386b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0234_7_445cf51bf6be4ab48e91b5d98f3945c6_8dad6bf56e06479b9b13ca9b3975f02f_master.jpg"
            ],
            '#E5E1D6': [
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_1_577e2d9625d0412cb0cdbadc42a73539_2a5cf3db0c6a4fed8831bf8593f4c6b3_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_2_552361d11719439482753f0c6c90a48a_3f7dfa14316846b2828ac64b8fbfd6f8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_3_e5a651617f8c433bac82a18e88581069_3e4e88f0edc445ed93d581cf35325804_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_4_362e632f27f8499b8f36717208507124_41fce3e99d934064ad96250982e3e34c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_5_bc6758b55286465780cbf6fcd597d32a_c327a7ec947b4adcb09aa9e42f704c6d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_6_172ee7543e24430490b242d847332308_46b952569ef64eba83017dfff8870c90_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0234_7_8f1f5578de0c46ae9ee037948233fc48_b0263572f861474eb8e2b0878bef04e8_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_1_23fd58ff3c67499cb8b87f442f48875e_8140095a02264be4a8dabc2ef24ed074_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_2_4912f9619e9444e0b75e946b23c6d9cc_8ae744d59c4045498e1b9e466a6ec5b5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_3_850b46c38bef4aaaac794fa8b486a522_dcc865f677fd427ead0426fad6e92572_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_4_dc40654367164cc9a74ede0f710f3562_0c80757a12734a21b40cf350f55b2d66_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_5_789eb7a4b7b9441b95c4368de4607f9a_228e9dd4d7a44172a69fcafa47781013_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_6_54266b91c6c24594aacca72cdd7e748d_e617fea6867f476fa4ef88f95b98d4a6_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0234_7_1fc40eae22d24ff59ac8e0292af50989_46ad8987d45c4abfa02ecfe2c7657464_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông thời trang',
        price: '1,790,000đ',
        colors: ['#A9A9A7', '#A2C6EA', '#33354E'],
        category: 'Áo thun',
        rating: 4,
        checkImg: {
            '#A9A9A7': true,
            '#A2C6EA': false,
            '#33354E': false
        },

        linkImg: {
            '#A9A9A7': [
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_1_2a3db8cfe09f4100934411255efe700f_9cad2e7b796d46bb938981849bcdb5a0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_2_63cee96c47a542ed828ba02be9118632_5f241ebe99254aa6b1e52cea5a7a7b28_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_3_22540732f3f74f0eae80b8be3dc3f552_a010dd50679c4a3fb75f325b10712d51_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_4_89bc55eed7ec4503ba0ea3e6ac5782eb_5ebd47052a5e4643b7da42fc9c602161_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_5_f33af5d6e3c94244b7fa555f4388fdaf_ce2423f3b1034bc78b7501a2caf9ea9e_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_6_39aea1a5921345a5a8b2b54d157b2c82_1aec8631085846eabc5a9d714f43bd90_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsm0434_7_f1836a21c5774361982f09b84ce9155e_6f6341adf22848c4a8fdd0034129843f_master.jpg"
            ],
            '#A2C6EA': [
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_1_3ebec5235f084f32b2b48b2ef88ff6c8_e4696f9bb4304e25b99748661a6c276b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_2_3e0db8ce9d084c7cba0522fd4052bd4d_001c772b321249f68e9415dfb67ff921_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_3_a9fb099ecdf04ef69378ebbb81784976_d997bbf1033741b89f8b18bae0fe5f0f_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_4_dabeff4c8315439dadfbc7e0e228ab9a_edeb35aa5cb346ed93e6d63d1b91f0b0_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_5_ff36c35c381e428d8d76985645141d16_17a8cd973d2e494582f5e2f8ebadfff6_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_6_17fc6c08f50a4d24b175f70953e798a2_668f167e5ff14852b4026185f4dd0471_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atsm0434_7_74f9603d08ad49dfb528685644c5fe15_307d327a99594e51bdc4089e7f7d61ec_master.jpg"
            ],
            '#33354E': [
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_1_f0d819babd0e40bfbade15250fd69f54_e2ac84b062304cfcac6c59ff74bf4aa7_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_2_ce9e6557578b4ed6a8060e19efe59465_d54a237a9da446a898913c8021151b67_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_3_42902bbb43394c43ba82687e5fce9e0a_e82ed807a5fe47ab97e8d9cadee1c694_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_4_2ee8029aac344eca89fda71fcd0342bb_d538e172ee7b40159c95fab12b078fbd_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_5_2c54f6fdd55f479da8e85f2b90e8eb31_5fbe9579ff1a4e17b755ecf6f1d89bed_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_6_e20709db42264f9f96059eaafdfa1904_0d5df20d951a4ffea3ac153822fcebdb_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0434_7_463b6fce90c54933855cc4695175b37a_c6f6f5aa491e4b6caa4541dec3cf914b_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn phom suông hiện đại',
        price: '1,790,000đ',
        colors: ['#A8D3C6', '#E7E7E5', '#EBD5B7', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#A8D3C6': true,
            '#E7E7E5': false,
            '#EBD5B7': false,
            '#000000': false
        },

        linkImg: {
            '#A8D3C6': [
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_1_fd8f1c9cc034497e9619df8e5d7911c8_f02e695ec8c74f5e9143d96aa73eb121_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_2_d83bcee7fa934c96bca7a84e23b5f348_ae74c5383cad4cf18e56332fb8014a3b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_3_4e213458dfc243e893c5c7e981a78507_300493e42d524a849dc4597b0ab465c1_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_4_b8c9fd16cfee46759bd2c37d44fb1fe6_79f0db95d4ab4f329738bd72670108cf_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_5_6886065704454aadb5ec2cb08ef21c6f_df585d16e29e4994aabd27a61754827e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_6_184de34706774f8fa29452cef530f430_f97a6b849272422eb62412007fefe37b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsl0134_7_cd266c092c1b4b029effc660cdb2dfe0_5b3379737ace47a09285a9899467a676_master.jpg"
            ],
            '#E7E7E5': [
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_1_3d0cfd6650a648399df30cbbc1b8cab8_ae7ad873261d41839e4118e680c01fbc_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_2_19c220a0d074425184a235d2931b7fa8_810e88ddad6445ea81ce2ee8c9a40fc7_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_3_5a072798f98c45b292993e7efbe848b5_66cffe088dfb471d9373fd581365f6e9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_4_10f41f68fc75488f9364741a5e54faa7_fb1cd50ba1344455baf64ed330aa3c3e_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_5_4ba6d4fb24464b708a3526b6fbfbc531_846e8f5ce7df491186fb4e0068fd1e86_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_6_a5efd7cd2f3a42deaccc2747885023df_d97c8510d92a447da4685b4ff6726d68_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3atsl0134_7_68f03ca2644e485fade1b6759c77f1ae_82fd345f95d543d291723ae145b463c8_master.jpg"
            ],
            '#EBD5B7': [
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_1_2c6860f8cd4144fcae2ba058a942732f_b66fb94c53c54620897ee61a8565aea0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_2_31ffe1dd319a46298d47e005e37bb379_78846693f06642dd99c49e31d7771d54_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_3_0874f43682c244769b02d308c7276ce5_9e0512d2a40a46ba8221cf1a6f743911_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_4_36ca67172deb4e37a7b3da76440ad8e8_328c6e449993411dbd46758c1f1574cc_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_5_6444055eb5974d5c97a132fdf6925cbb_03487bb0544d40e2874b1874489092e6_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_6_f08e2244ac764579a1f8864db6821e7d_a96dd95496d544b988b8570c77846dc8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3atsl0134_7_c98940baeb7840a7914cbf646c50870f_d46631e33ded4cca8d66221984aa728f_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_1_1bb3848de8f84e66b01e56f66edd5898_51bcbdb5334245c28e49a77eaa3300b1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_2_ee2906b3af5343189ae618be5b4cd7bb_94f09751303a40aeac2d5374cf2b19d4_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_3_c8664dd11dfa4ad498443d65cce89df7_b0c49b2191364e2ea97d2c4bb684f412_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_4_8ea34e8994384a17a951447ebd3bb385_ab7a0c2f6e8647b490efbae4bd33fafe_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_5_92c8d1f4ef274caca4b83ac6be27de97_66ed22b5749041a3a0e88cc70ae8a258_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_6_1969753557dd4943bbf8fae8f2721b07_cbd648c65c0d4cda98c1a5b21d066e6e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_7_13b22f9eaa6342d08cf9d4640403bc5e_b71776d00e3641edba49ed05b7babe41_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn in hình dễ thương',
        price: '1,530,000đ',
        colors: ['#EDC7CC', '#EDE7DB', '#045C44', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EDC7CC': true,
            '#EDE7DB': false,
            '#045C44': false,
            '#000000': false
        },

        linkImg: {
            '#EDC7CC': [
                "https://product.hstatic.net/200000642007/product/50pkl_3atse0334_1_acfe8d8c2efa419496d10779de01b78b_3729655db936469eac5764a635340606_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atse0334_2_f59aa7617353430baba7e984999f40aa_45a788db9ad0458fa6daf1140f403c85_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atse0334_3_9535888cf73840e7bc35e5efaa06cb08_1b4faf95743142fdaecbe25a9af8077e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atse0334_4_ede7827434cc4abd965219d2729bed92_6a500464ff3c462194798ef89415581a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atse0334_5_be6a31559b8e4f7a9290f33a0f0671d7_b9dfd1448ef64c26b08911ac0eb47815_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atse0334_7_2a8a4e06d5064a679f56537c4a2f2870_f463399470fd4fb6b2ad772b0afc0cdc_master.jpg"
            ],
            '#EDE7DB': [
                "https://product.hstatic.net/200000642007/product/43crd_3atse0334_1_b5dd942df1ea4337aeea80654dc1d9b1_e04f9e0ffd7744fc96f063ba28c30017_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crd_3atse0334_2_747abfb40daf45ccb94f3d5a8308be83_f85c7743129e479b826382286dee4c12_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crd_3atse0334_3_20713ad45ac944d59b0663b78e4308ea_da1d91c3e1a24728b2719fca5b6346f0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crd_3atse0334_4_27e0a30b509a4ed2b5bb239e2d72bfa5_55b87abc89e4451d8544e1319648aff0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crd_3atse0334_5_3b6d291313274b0484aef8945c574fdf_71612967a98d42bba8bbbef4c8369a16_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crd_3atse0334_7_ad4a4290f67647eb9097f5731bba33c2_5c0d346f1e524da08d78e95dcbc6bfa2_master.jpg"
            ],
            '#045C44': [
                "https://product.hstatic.net/200000642007/product/07gns_3atse0334_1_712eb8f8c9694972b01e19a04404d9ed_2ce894b7e9284b3184696427ed853e5b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0334_2_fa9cc4252c9d450992608083497f24a4_2b98987964974499bdb259113f28a682_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0334_3_4b2d731dbf1548f69854d31c87e579e2_c7bb41fbf5cb41bd828522e50466b12b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0334_4_d579dc41478b4cd9b62638e4a9440ce8_fabc7b67756a431c9d85acc6ed978eb8_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0334_5_e1b6601fc4f74b339aeef043804c6afd_361b558c9fa9439d883aac78f782b3a9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07gns_3atse0334_7_48a8c9c38c1744a29f41ac548dcc873c_714ba218800b436487bba71985c94629_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atse0334_1_7477d62e24054123958d170e1e919931_d7dabff799aa449393fb5d2ef48b05d8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsl0134_2_ee2906b3af5343189ae618be5b4cd7bb_94f09751303a40aeac2d5374cf2b19d4_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0334_3_a4c5de5ce3274f14b05dfe694cb0f530_0edcc16b21704f3d9868965834031b1f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0334_4_42b494d49a4e45f48cad29d81cad0a80_807ea6c7c4fc419180ea359ebdd33788_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0334_5_469383fdc3b548f9a3992e1fe9582966_57913a5669fc4c30a914e992a79e5087_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0334_7_d47e4241c5af4d0e9346830b579860e3_9aecee1a8b114a27bd2594ef368cfab9_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn hiện đại cho giới trẻ',
        price: '1,030,000đ',
        colors: ['#EDECE2', '#D8DAD7', '#D2B190', '#2D324F', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#EDECE2': true,
            '#D8DAD7': false,
            '#D2B190': false,
            '#2D324F': false,
            '#000000': false
        },

        linkImg: {
            '#EDECE2': [
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_1_7979b4dd7db2447cbf2ddf26b2761493_2ea1ec6877d44a8595a61637e526a486_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_2_49fb9e9bf61e4aac9f6a19ea97e7985e_8ec7b4d3b07f4541addd8ef35182a368_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_3_73eb32c4da99441cbc8c9737b9930d2f_7d360cfed3a647b891b869a26898a478_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_4_950cfd22149a470980e3f6d341233f35_576dee66301f42999f893412607f7367_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_5_3218109dbd044b609146fb22b370cc98_5cfdac82ee6b4e6ba353fb8dd690c11f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_6_022b4fb03b654a08ad4b30eb469665ed_f9f39778f97b406e9331bb5f85a166ef_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0434_7_c699bb0b12124865aad07f529d3d3b66_65e1c30a3f9741aeb47050d542e2a9fa_master.jpg"
            ],
            '#D8DAD7': [
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_1_ed221b331c734d519795d7e1ed9583c8_7399e3ec89a04ab583b477b046106d15_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_2_b7aca0067d7045529ac96f0b30a86ee7_d10ed78f1aaa49e89e5103f2bf03eb1b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_3_6da405c5acf24604b1a3a2accc305fd6_e68253f3c9b54fc5b94b145508ee0f44_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_4_5dd27e35a00e4beca97e94d5a6189141_45d9cf60ff22428d944b166cd85be65c_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_5_5ff7757ed29d4fd89880f020327c891c_1fd1c3413ad24bfbaf42e0b1b3bae915_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_6_652cbbf92c6942359e8fe6cc9a47e6b8_d86e5504b41a4a26b9a9c528ade3f6e1_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgs_3atsb0434_7_e7b909ba3a9f47f78b2abb510cd17a86_9f7c035797884708a0dc62b87ffb4e38_master.jpg"
            ],
            '#D2B190': [
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_1_f4d88ad0391d429ca44a6febb46c4b49_11145fceda6c4a81a65f102ba0c6ec16_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_2_ed069fce22fb476a835553118400e973_1cc6a7455d6140a9baa8c2741b381ded_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_3_b938fc5864604cae9512beac4329f213_35dabd90d0fb4034a8333ec0d5cb5aa9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_4_3790e45bf88049ec9c5c4dce77a2fd44_7fb373cf7d454cc7b4857035ef4d09c5_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_5_6c6b44f413104c15b6c28190c766df5e_471fba737ca647f08c2145cb025973e5_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_6_0e595b34f55547b78e01112ac0d38578_48dbfe7941694a7bb57d014729eef33d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0434_7_a2bb6dd59ede4a9591fe7a505e9bea2d_29ac0651498f455d872ad1d71a1933fc_master.jpg"
            ],
            '#2D324F': [
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_1_9db99a5fe278409397edfc9017aa2b37_057f17120f20447687ba45dc542b01ed_master.jpg",
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_2_91b00263a6d54e1798049068fff731e2_656ee3406c0947a48024a36e5644107a_master.jpg",
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_3_66d7db3ddca048c8beb9922cde62c995_1c39e0cb75cf4195bd5b8d2051ec0ff4_master.jpg",
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_4_6c5f68d110d741e3a6b7498d0980f102_03e7d904257f40ad81d47c521adfd8b5_master.jpg",
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_5_704431bd8c3e477db14ef5a6144730e2_e34f7f88647d4377932ffd233ece2785_master.jpg",
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_6_12421ac949bd4f4abeb20da371a04183_78032923924c4561ab736b144b4e1915_master.jpg",
                "https://product.hstatic.net/200000642007/product/09nys_3atsb0434_7_fce20a3fa144459c890332bf6f511053_97a35aebabe54c0f9d08645d54f4eae8_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_1_b8065961584a4e08b3e516b5461dcb97_a896d1eac81b419fbd7c5b661d9273d9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_2_33d47d2a3d1944a8ab9e72c5201840a2_fb0911e2f579477cbb7f979f1611c335_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_3_474eb680146c4a818a9463a2e8cea978_e7dcb67e8c3a4b7eaef3120888f8864a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_4_8513478b068d4b5690a62b1252c07b7f_ad1e8cc1043f40469866b10e4199f2c7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_5_ed35c335bb7f42c8bf113bad75d3c977_ecfef86b9ef84bfd8e658b6713b1ad21_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_6_3ba8f3430bbf44c0a98dc38f6092c699_961bc69edb7d48b395ffd7be0483c014_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0434_7_a728963c216045bf8f4868d44200889a_87afa081ef874cb884b08677e6d3eba7_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram Big Lux',
        price: '1,790,000đ',
        colors: ['#ECE6DA', '#F2D3D8', '#282A37', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#ECE6DA': true,
            '#F2D3D8': false,
            '#282A37': false,
            '#000000': false
        },

        linkImg: {
            '#ECE6DA': [
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_1_07b8ea5bb8834ca7b459b8d698809a8b_11412700bcd84a9e8221121722a36c6d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_2_d48bf666e8a7420ea0c724a1eabcc9f7_7f1f010053004df284333522824e4615_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_3_801f110fce1a4fec964981cf02919505_a40ff8a417854388821ad5e7c911229a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_4_507f96a1340b402687ca46ff35941025_aeb6bbde4adc4c4a814a3470ca9dbecc_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_5_915e7b7803ba4acf8c3f4e6170b30e59_0fc862165568431bbc9c92f126b24972_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_6_a6e9323081cb4ef9966665286013d691_f33a5126048d4ef185858f0e640becb3_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0334_7_3af34eddfdbc4c7ca6a1c45c12ea6d6b_236f0406492f4dfa9f254150bcd41834_master.jpg"
            ],
            '#F2D3D8': [
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_1_b121fa37929e4551a106dc7cc5851096_f8e3c407d77d4e9faffe4375574096a6_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_2_45e1998410734909823a6b2c98e674ac_1b9feaf74b71437eb19d01f91caaea68_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_3_0026559a1b5e4b56986f995d52cab211_a1dbe936af7e4caa82eadd6a9aa39983_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_4_0f9a9df7dafc4521875f34af6bf2fe29_9bf1ac647ce6496c8f4baa72d7c74c36_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_5_f040985613b64da8afa3ddaada086966_c4aeb18c0f394489bc2988788cbc00cc_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_6_44afcfd111004394b5575c1a1e24442c_e6ee9fd681ce44578250d4cf56db8880_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3atsm0334_7_ffec5533b2e94562a0084661fa4921c9_4e98084c171a47099f347c5829a9f7f8_master.jpg"
            ],
            '#282A37': [
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_1_b59ffedb0b0b4edbaca9e96eb3312583_2869d8835ad04e88a32cfd3a9490c58c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_2_fee654c154504c81a1e20502b4f286ea_d74ddb5323954859a13e15185d5c962c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_3_24220d7761884f498db53ed94e870667_4d73a112a76c4111a393d6c47b362dc5_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_4_8019e65a8a774bcdb3e1849fa4c8f429_c1982322058b4226900069a8ba6f34fc_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_5_630a315a2fbc4b668a299c65c058bd93_9bf6c9541cd84a56b21b85f2b168d7e3_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_6_73899941345c4f9bb07c0e9f01b52458_f78a0a8240744c14b5f1acebb8158fdf_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3atsm0334_7_d74d1a6da6c54501801d61db8660712a_c3a4d4fb57b44d28b073de7c5d4dcdc1_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_8_e220b637b88f43ba878a285bbee6c618_4ada60c9767a4b3dbef213365c4e8ba7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_9_97c419f5937e41699bcd4b9116eb677c_3b88203aef634267b8b208893f6d7f46_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_3_a3f3f5db4cef41efbbea08fe05ff99ea_80c4b764ec564d65beaa5b1c53246883_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_4_023aeaf96d7c4c8c9eb28b558eacd9dc_57d69151e2e942b18f92d0c15bd718d8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_5_f0c370524d254771982538a4f974d677_8652dacf48dc48dfbab324bffb15f17e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_6_22a0e93877264248932aaf053a58154e_e9657fb0a796402e99cddaff0cc2855f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0334_7_46717f334a5040d997078a2c5a6a255a_66b5f8afe5634d6cad02578ac0b54e00_master.jpg"
            ],
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn Classic Monogram',
        price: '1,990,000đ',
        colors: ['#729EC1', '#ECE6DA', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#ECE6DA': false,
            '#729EC1': true,
            '#000000': false
        },

        linkImg: {
            '#729EC1': [
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_1_a29b4c00f72848d3816b74f7b064e606_41a0b8544a8c4fb682de9fe9d9a9dcea_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_2_810caa9121a648349ff418ddd23eeebe_9a730eba9345410a8e72f9b817de325d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_3_fcd8492d321d4e64ab131d90dc7aa7bd_5a44edc34c3a4c3dad73529d0e3d85db_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_4_35853e2f3a1d4cbe8addd800bfe3e5b3_1b8951653e4f44418ac109ace6e1543c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_5_5d2e2a83bb3143e68d624a68a8c878e2_84da5a513c5f4fb3b0e4cf45e3051868_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_6_a8bfa50896f2476dba25f3cd3bebf489_5efa1367aa2f406696bba7dc3cbc1efc_master.jpg",
                "https://product.hstatic.net/200000642007/product/07sbd_3atsm0134_7_6efb7a27dfc247918687b93ea723048e_158c55dfa43841de9518a150037a6dbf_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_1_e93f4e72c74b45f180d3463c93c7bc71_6c3289e9674042a589a61a43592da23d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_2_332f18b05f544943986b93880c976ec7_0eb9ced01c9b4598a5f9a11f59172f6b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_3_a8937085148f4d0fb662cc4fccc555c8_438943e1a5f4427ea6b40b17b8c5a778_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_4_ae7edbc1bc5a4db58eeb1f0dd124750d_7325f91ff3b74832a3c6e5780dada397_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_5_55958515938841de9221959ceaa1a1a7_70af05e1d7334e2bbbbcdbbf5d742761_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_6_e421ca37202f4d78ba852e37a346c9eb_b16ae94b163142c9833ca35a6bbc20bf_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsm0134_7_e2bf376f60fd4c6cbca6ce11ec1fb827_92bf07f4466341f896e9cb47bef43ef4_master.jpg"
            ],
            '#ECE6DA': [
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_1_4667718bb2d848689d1f41c6e33fd346_d845693cd5354321a4f96eb6261d4c8d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_2_806b22b1ed624bd581a46b820c564f2b_3505c857e1db484389f368fefcd2f0d8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_3_96d894f122904995af7653f8f0991b80_3e1d500524e54cfca77c7c5228d3fc3a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_4_5cb4c4117c194ee68922f008e0e2b40a_16877f1cb13c4896ac2a35e5ffbf9b60_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_5_1c6c409065444ddf9473ebdd9a1b703a_91d288930f114f968fe4e56bd04c3746_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_6_7a0fb68bd5844e5d9e33a79f361b65e0_6af9934aee3a461da578f90a240b0b37_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3atsm0134_7_4f5319824a6f4c129147abfe773dee4f_082aa77e5b83444dae63b1a46c46ffd7_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn Checkerboard Big Lux',
        price: '1,590,000đ',
        colors: ['#000000', '#ECE6DA', '#729EC1'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#000000': true,
            '#ECE6DA': false,
            '#729EC1': false,

        },

        linkImg: {
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_1_c021aae9587642be9497edd1b945fa6a_4221bf7b087c4afda849c99491cd5c07_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_2_1652ad51043e40aba16e6412842be8d0_da7f3664f3c84a5f8b995f1c4b7488e0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_3_11d0e71e01a74b4f8a51869f3b66668a_1a8f5440e3744150b2c7e49be62d0181_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_4_13010dd8d5b7447693b29df899ba7a08_ea44c95f486b464fa73200d4be585fcd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_5_9cc5284413d24fcf991b20671bbed3e1_1c98244859ba403387cfb2e33cbc625a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_6_ca3865946d4d453bbfeaf4a636f46bfe_bb737f1d5a094194a9f2a8d197a6c9a8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atso0134_7_67defd36ec804e70bc22cc130578488d_e2b1bd3972a144e3ad29f12453ea602d_master.jpg"
            ],
            '#ECE6DA': [
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_1_0f93867624284e41881c0c0f96f39b2d_dfb68580b7a64577822a60f85320fc14_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_2_2be8f6dc6582489393c56b6afa225989_0ff71a449c4d45be9a7f5480acc51aad_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_3_010498ce54ea4af99048130de0e2b191_5108e89312d344fe93846d1d28d4af6d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_4_6de047f0051345b5bc17633bb1b2c922_9ef6e0514c654628b8f224908424318b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_5_45e76932f28441349f9165291a18f55d_89fe47f2a3a64b6cb8c639776032c3c0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_6_4f980b8d6c8044b399f040c00cd03ab0_802e6d05ca914e4fb27ef16d917fced9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3atso0134_7_f2608ec25e8446cca9f2789bb0d4986c_689dd493e7994ec2b520984f661f4f0e_master.jpg"
            ],
            '#729EC1': [
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_1_5610483bb19648cdbd6a9c0c299c0a5e_c72802951aac4ce295ad9e5867abcbe6_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_2_618c79615e654cf5a80848c5437905f7_f85f1d2d0f7a4429be7f976712f185d7_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_3_d8c9fd98189944bc8b9bccd8600986ad_1bbecf97a06f4b0782d4202f024fcefc_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_4_4198196abce84af09f60d8f7ad9d41cf_b5d32888b660407a82ee4008e07b1d47_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_5_2ea8d9778324415eb0b47125fb2d6931_9ab03b6eb3fb4cc387350b08facec013_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_6_46199d1f89a247238a2dfc09ae6d69df_13ce89a9e7c84ec780fe928d809dfe4b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bll_3atso0134_7_90828bc52fd746c48f8a393df70d9a95_955faad660384dddaa4c4618b427452f_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            '#E7E7E5': [
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_1_819429700e1e4ed896f81e2a912caa3d_2313f32ddda7406b8e1e1018c7511c9c_master.jpg",
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_2_ce871714921849d3ac9f2c14901c4823_ed745e5c7352475e9d87b8e049d5b2f7_master.jpg",
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_3_6bec21b476ed40c9a349d6611aefd249_f5043b9052004945bfa943dee150cb7b_master.jpg",
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_4_3ff0e819a67d47f9b59198c4015ce530_d5d0c3a3994a435397e59de011376b7e_master.jpg",
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_5_5d61f71489b4428daab28b14ed3b1f01_0b26ec65fed74d36ab993e01a22d4d77_master.jpg",
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_6_27c690b003ee42b4a9e9fdc54c34f522_dc2668e13ee94bcf96b2d5863fc7a7f0_master.jpg",
                "https://product.hstatic.net/200000642007/product/09whs_3atsb0534_7_ab391abb3a464539bd60288894bfd5e5_ccf18f6121f5412ebc835d94473d4aca_master.jpg"
            ],
            '#CFAD8A': [
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_1_d877e9cfa8a84aa49458688f95c60c8e_6738a4cb169746a782b6a1061b18e8e9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_2_8052be58c007435481e4a81eff6bee25_e07a994b9c2a4534b15391f0733b6255_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_3_d32a6cbe12024efdbdce05a290beb65b_6b5d4c04fdb440eab5ea7960bbbe3b55_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_4_6eb021cbe55447d8b7ef518cdab7d359_41e924ce626b40b48b63bd69c27125ca_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_5_672c28ddfa3b4e728e65a84c6c9d50dd_022edf484b2445d1be4983c320493faf_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_6_18bea0da46094e7a8c83e8def11f46d8_abe5b80ce8e540568b9c2920745c6af3_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3atsb0534_7_ff18200f2f764a6d9274a3ab143b0a90_888f17f9fc6d4e9a920fcd0aaf50fe96_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_1_9ec06aa64b58454fb5e940b49aad68cb_90bd1298730145dd8b821c4456148027_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_2_d42fb7d6e4474113a09686ce43a7d448_3aebaa63767747b18981a9cb41293b57_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_3_907f9030e0404ab9823714701b64cf25_94d0ef73e77c42539d499d3c8aabf078_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_4_80ef50b5b4ee489ab3a4a3b9d7bf88c7_4ae7768eb24145c8b63f4231f4353a1e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_5_2275869697224af9a5fd2b914ab29a34_bcce6d83e0a148189beb6b37553a1322_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_6_ed6d0972a0db4d67b050d9faee3750bc_3385c86634bf454b83d56939146b28c8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0534_7_1080f6606f7645f9a06c7e87c08f3a4e_ca4bc23183404ed49ebfcde1ee35742e_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay dài Varsity thời trang',
        price: '2,290,000đ',
        colors: ['#353439'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#353439': true,
        },

        linkImg: {
            '#353439': [
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_1_44c16843f2e7422b8ab740d0e0008ef2_0d6a34b7403b494195df146e85672027_master.jpg",
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_2_c53c0943fe77492784bac8414f5d237a_1b468d8d56584425832f7aa5fe660d17_master.jpg",
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_3_3097c918bc3a4e0e8f5fea25f1d1d523_9289a7b2db5242f8b020f5dc90d78e84_master.jpg",
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_4_1a5d71e7a33342f3a3ab46acf149f9bb_be7b05727bea413baf3daaee27002b5e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_5_eb3992f33d0142c79e02bf9314f15576_74e88db441c04d03b916fc2346de275b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_6_b787704e1cec4021ba875fa0aedc950f_e869a13e74624d54b0784f4a7f0eadfd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50cgs_3atsv0134_7_56165ee3346a4231ba5bbefb3ebd9d67_baebdc7347f64534ae54ee59c6d5b7b6_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay dài Basic Small Logo',
        price: '1,290,000đ',
        colors: ['#7E202E', '#E1DDD5', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#7E202E': true,
            '#E1DDD5': false,
            '#000000': false
        },

        linkImg: {
            '#7E202E': [
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_1_580ebc3c58db45b8b74cec1922e1f77c_904641969de44b1d893c9ec68f908809_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_2_a2d16cb61c2e4a4593c746ca738da242_9d5900d99e934cdb9c268ac32953bbcc_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_3_a2ed67501d974d258347a742bf84194b_1ae5c7fa62c84899b618d895e3a0a502_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_4_591aa568c2e945d39cea256759b17c95_b0cbefdeaf1b4ff2b5ef0a34986758bf_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_5_3008c15b4675478f866aabf09bd02180_9fa580c98aa440b4bde540f0c9ba9223_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_6_b6c9e764602346328880ddb43ca13e93_7fa3376d15ed4b7f886bd481125affce_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3atsb0134_7_1c1be79fbd7e42058d15faefd90731d9_8bc4fe5101904e31888e4d05e8960af7_master.jpg"
            ],
            '#E1DDD5': [
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_1_b5e30418209a4125a4854f49aa1c3f60_4339af450c834cae88528e2f98a68215_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_2_14e20c8c701b4e3a8201ed47c6f7f388_43b8c100265e4d938fec316ff5ad2ce0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_3_f3895ba21bf643b688dda14f9c9c5b5a_35476c59149f4267898e18194cb8ca90_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_4_411f7eb886624a1ca823c06009c6e486_3ae32253d9e14913a1fde7f5f776993c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_5_bad933086c03468c9323b5939146dce7_de6053ef0a8642efaa6d4673d82d9efc_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_6_bf51e223b75043af8d31103530cec82a_e69f73896f964996a25fce540d48220a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atsb0134_7_6104dff104b245f5b01b59dee566cef2_9141d20024514fd19b464e0af8ee1581_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_2_aa1f417a1449480789bf6967ec871cd4_d1c9edc49ff84258a72a5be135a97d1f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_3_583e76b0ac9d4be8bc1cb0f8da4279c4_ea9ed1cbb02c4616915b66d849352234_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_4_21a39bfa72a443d795af8e0af019d42f_feb653df04364172a4be6b6a6025c6ce_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_6_42be2091fb1b4a79a162491a867a16a3_2bfcd943407042a58bc77bebdda267fb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_7_751c9ff6b31d49658e1bbcdcd76b5839_ef8418e37d934d88a331602bbc9568de_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_8_3765b58c69e847029bd3bff0c6718887_6eaf6f6946fe4f9eb259b83ca4b05878_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0134_9_033d4d405b504dd087147faa699e7924_db556b1079e4435bbc066d191f220b5a_master.jpg"
            ]
        },
    },
    {
        id: uuidv4(),
        name: 'Áo ba lỗ unisex sát nách cổ tròn Basic Big Logo',
        price: '1,090,000đ',
        colors: ['#000000', '#E7E8E8'],
        category: 'Áo sát nách',
        rating: 5,
        checkImg: {
            '#E7E8E8': false,
            '#000000': true
        },

        linkImg: {
            '#E7E8E8': [
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_2_203a316a75134bd8a9b7a405f5986d88_6d6f46ea381645b4bdd4c08a84c17b91_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_3_79a2223fa3ab49f092c9e174fbdc37c4_9783474565ef4454a3a85e7247155038_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_5_adeab76758bb4a3eadf7c2a4f3122470_2da5bb2cd8a541cc9a640795eee5d6e9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_6_7beb4a1bfb374f8ba0530d046e3f61b8_53e9ab076f9c42e7aa3f92d7d16b231e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_7_3662e2a5e97a4821acdd6b4905774f6c_bf5d474f4c5542d0a16eb23abf23023e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_8_f7eae7b8e2874b2da736880da57500fb_b919511b5daa40bb9622fb19a5949baf_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atkb0233_9_2da17ac27d42432da64bc361c98b9bd0_2b6c49482e414c558b7a0518883cff8a_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_1_a7ffc8ff298c4747b483e963f45dff4d_8deb2f2017f440199e3f22ee081fdaf2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_2_304cc4d77f3b4e18b67afbf0b3ac62dd_a0a279954b324623b7c4c37af37d22a2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_5_4b38cb40eb854f669a0277c495526a6e_25518069a2de421494710db6d971d1ff_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_6_f665258aa73e4a66a606a0b919e5522b_251b4ca5206a47ba98936640f5503989_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_7_66c8cc12378f44ffae3f729178381ed2_23b2282981c34e03b315850f18799c3d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_8_c6c49db24eca474aa13559bd0095b6fd_92c1928749b742ffb3388330ba3dd43f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atkb0233_9_a3aa2de25b0a4c829d54ac01cd6be092_0596de0a2d4c4eeb8b3be85a871a62a3_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            '#E7E8E8': [
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_1_dc267f3bb5114a0ebb1e920162a4106a_140ac90ea30a4d90bb4c82102468568b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_2_d7b8572be1c04e48b45288d2cb8148f9_620723aa714d420d9cc7a1b1d9f782e9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_3_eb00760f1026435bb2e7aff35e80c4b8_24a7728d6f684b638660d7b6c009afa6_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_4_f4fe92fa719a4ee1ab1ee652f68b2cae_a0ba1a0618a049f5b892a7a8fba81cb6_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_5_63d78e7b60244971ba63cf2f814fbcfe_6c12c202696244fcb75845e80989c663_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_6_8335621f207c48838a013ab7179be29a_a000aeb1c15a41869e15128618a0c9cd_master.jpg",
                "https://product.hstatic.net/200000642007/product/07whs_3atsb0334_7_2cffbbf232b746679cb7bc984b98341a_67b38b052ed643a18eeb1422e41169e1_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_9_1bdf55b31a5b4e9a80eccf4c0156597f_af60b436c1d94123877e4f0c801d3679_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_10_d20551a8da9d4d658523f58cdfcd7ae0_05a25dfd8edf49d0ab65400f77409a58_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_4_ee23589d7cf24f5ebc529ae55537f3b7_19efec8368824cd8bc15db43106f559c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_5_b046cc09101a477ab52c335a528a04a9_1e5366860ad34babb0d4dea2cec1b481_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_6_79d3b71dda2d41b482f8a28eb620733b_bcfde9fc7f4946ea88bea3cabc289823_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_7_83d40c652d7b4297a917d95ba5b4cfb9_d927bc0a5f324d78870cbe526136f0fd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb0334_8_8a11a2026da14317b369719a820b9db3_a4025ee74fdb4777af5ad111c115d1f9_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Varsity thời trang',
        price: '2,290,000đ',
        colors: ['#A27244', '#6C1927', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#A27244': true,
            '#6C1927': false,
            '#000000': false
        },

        linkImg: {
            '#A27244': [
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_1_2267af95828247028b76dead9ffcf39a_a602770d0eb145d7a50b779e580d77f0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_2_b3b96a2deb774a70a23ae3dd88be49ae_afba644d621a419fbf9f7cc1782331a0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_3_163d7f21fddd49afb7acfa1f974b2479_e1eb060280a64cfaa95f610fa2bc18fa_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_4_a52ddfd6cbea4e8e97f53e8e161be44b_16fe1c9739e944f489fe56125b08553b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_5_e84b28f8f4094ab4a49e219f16c7af67_b771c1969be5418f8049daf00f022553_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_6_6ab3a8d7f4d640c19b0dc2d104592a74_99ec2f8f7c564303a49c032c781f8b01_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgd_3amtv0134_7_7719a8c7caa141eeadf5a6813e678909_ce14c8b38dd54e47a0b82bb9f7927eb1_master.jpg"
            ],
            '#6C1927': [
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_1_2a40070f6b92430a98923a99a83d96f2_c8f0d816913943179c1509f2bd3ce7a7_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_2_30dd6daa8fac4cebad7a1a0310d093fc_70f178a13ddc483c9ec34320de5f21c1_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_3_26054ed8530243838620f2910b4ef084_e122f0ea79114624b36607db332b2f5a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_4_dfc5277cef37452ea0e8c2e1661ceca0_55fa519557d140dd853380594b2c7149_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_5_10054a4e970a4989a48a37da32ff2eb9_0f1b4df5ca204e4fa4528371083488b2_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_6_a50ef4122a8e481aa868be5a9ceae8b3_16fabd5c16b640a781baefff2bbeeed5_master.jpg",
                "https://product.hstatic.net/200000642007/product/43wid_3amtv0134_7_eb42d5c1ef1a4f0886f990b27bf2613b_154e65e801ad4f5c954d7f53ac226599_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_2_7474092faebe406caaade988b5825d32_40b9d726a9de4f9faca0ba9ae8d797dd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_3_c53ddff340794792a32117cc9cef450c_ef4803efa90d4c528d724302159d61f2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_4_523b75cc8db9453999499b4bff572a88_e19db69387d04d09abcbc7e102f278f7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_6_7279c14333fb41f780eb797441467992_4bce4953c3524dab92676a6d65f4f38c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_7_424806d21f994a71a815e0380754f3eb_5fdb70ffad094b5d993646c02e322883_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_8_aea9274c833a4d7db78b0ea5524c9b2e_aa99d49b662a4dca8ca2d7bf772d64ff_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv0134_9_57ec224f6cff4f97a53559435ad0fce9_3b7d2753c02f4f91a049a9ea77566d6d_master.jpg"

            ]
        }
    },
    {
        id: uuidv4(),
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
            '#EBE7DC': [
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_1_28f8c1e558994e83a4cad8aa484c8b5c_63bc26aa0fcb4ef2bac9a7de19b11a37_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_2_29c63bc7c3444ceaacebfbe8666874a4_4b531524cbd44d9ca32650dcbbcb3ee0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_3_1abd870f687c4fee80c8418e86d9c0ee_30bff1c7cc8d4798820c82b9ba63f108_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_4_d0c471d25e444520aa0ad85377a60365_4828ce516db7404eb3a0ef90ab4be6d3_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_5_9a5f926276214dc89b2a635c042f02c9_52b9fd85a1d04ea58bcf99c27e2d7943_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_6_2af768516ca64345bb37244cddcf0719_b07fabd745b4411db5ce615140df1f52_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtl1034_7_d2b01a53c98047d59b656ad666b1dd58_d164663719244174b5519228f624bf2c_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_1_d1a10530faed449d8aa4893ad84b3dd3_9e4085d49abf4ca288408e09854ee7f9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_2_3d45a3e6ea234d6e915a40767105b5ba_f764c2a883e7413eb1011c4ac12815f4_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_3_3d5e999849d040b6961e1c4912e47fc5_25beafd9e5604839925a95e4e1feed26_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_4_00b6206995114490bda389c219d0ed50_21194f8e8d5b49038625f19fc60f003f_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_5_e2338dc02c2a4a469ffe003ec0ce2f45_ff735410ac054a208d2bdbd7c5b030aa_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_6_27b649e213894bb3b36b36de649cb7e4_2bc094e5f9a44e85a769e4b6b7d380ce_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bks_3amtl1034_7_781f295e768047d09429aa25353eff97_bd32395a45bd44a79c9f62835772672b_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài form suông thời trang',
        price: '2,990,000đ',
        colors: ['#C691C7', '#C8A584', '#18223C'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#C691C7': true,
            '#C8A584': false,
            '#18223C': false
        },

        linkImg: {
            '#C691C7': [
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_1_ed593a46d21447c4ab60875c474f89e8_097d403aa7324bbba7a0de31d683e26a_master.jpg",
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_2_11e87c99849d4985b3d89e392be31752_f72e4f843fbe4cae8c2e25ec6051df67_master.jpg",
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_3_94fabc11e893448ea466b920fe5bd0e8_3741fd39794347ef9c2ecddd4b5bffe4_master.jpg",
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_4_d40ac5b8465d46e5801767b853eebac1_fc6f067acef0421abbfb2ac3107de33e_master.jpg",
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_5_a79850a6c2174bb98166e24248b5ff11_4509a5d4084c4217870e2850dabd9fc2_master.jpg",
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_6_ba238933106a4324ad8af6e687109b60_043a8bbecab4434bb4a0c8919a7bdc24_master.jpg",
                "https://product.hstatic.net/200000642007/product/45ldl_3amtm1034_7_95e87ef8952046399cc0b2247f25388f_a62d84601fe44f9b9f8c56d3e80e0217_master.jpg"
            ],
            '#C8A584': [
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_1_5715c737eb474c56b4f55ec53985370b_d37b577978d44edbbd54b01e3e2a710f_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_2_f352a9f0723a44298bece88c88b91f2a_e552ae98022b4075908cd16a3ab9ae54_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_3_448114e5de464a5dac8b0b4f9517debb_1628333682274c259c960a012331bd68_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_4_1c4cc002030e4985bd1081bc564dde7b_e8563381f96340208553257439fccab0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_5_e8243274d9404871b8145990fb575873_c8eeb3aa30b94e1a860e46bcb49eb476_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_6_0f88681f68c4495789d7f7a8c1e7697d_20b262f1da0f4830be05bc73df4a3372_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1034_7_4b6223bf235647edb7badad78c54ae87_b0f5c5ee3bd84c109983d89acbfd1e45_master.jpg"
            ],
            '#18223C': [
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_1_736eb7a975a744c4a3f16f4bca52f51b_569edc3ca0b843cd8edc1c6f0452d640_master.jpg",
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_2_75e8c42577a1404ea64955079ff96408_8d85ba111bdf4559b51cf21629d3cfd6_master.jpg",
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_3_ea1f20b0ed4c4ba1ba6c3675bd6342ef_1028697dd3aa4c92965847c8ff7138d4_master.jpg",
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_4_760b0f79c3dd437a9b6f1a234bfcc52c_612f2a823e38475994abe7e68327b024_master.jpg",
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_5_6f311f7faf2e4066b45252a402902e78_40140aa4bd4b4db08ff78f21d8d39cef_master.jpg",
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_6_0d0139ebd059484489b4417260a7fac7_ece00b44e4194cd393dbcfabc78619a5_master.jpg",
                "https://product.hstatic.net/200000642007/product/45nys_3amtm1034_6_0d0139ebd059484489b4417260a7fac7_ece00b44e4194cd393dbcfabc78619a5_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Monogram Big Lux',
        price: '2,690,000đ',
        colors: ['#EAE5DB', '#6F7470', '#C4A07C', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#EAE5DB': true,
            '#6F7470': false,
            '#C4A07C': false,
            '#000000': false
        },

        linkImg: {
            '#EAE5DB': [
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_1_8c14cb3df65c479091dddc6f955b0bbf_401602a464b649e18079906beecce85c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_2_4fc1f499ad814889b558e9f57349cf43_836ab864c3054108b7b22dd9ec6288c7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_3_2092bcaa40734e5aadc0b6d373216ced_46cb2a2ef80042658307937949bc5d0c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_4_9e5373e400ef4c459c5786d1dc95fba8_9e09b8b823f14b1daf2f104308bb1ca1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_5_af3e6b878baf4831b1d1939bfbf03eda_2dea8d154e6c4a3294f9afb754efe5fa_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_6_14895400bc134c87b682f5b3ce68cd28_094e3349f1ba4773bddc99d2e477bba2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1234_7_06e417bdfe35428c9811d2b3c6c9cde8_13e75a6ae1e24607a6f864803d6a70b9_master.jpg"
            ],
            '#6F7470': [
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_2_e89027e65bc740019e560e43427cdf5d_e244371757ce487ba5e0ee4d4292b6fb_master.jpg",
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_3_56bb05b774874bde8e5eedf8eac77062_30d42ecb94434fdcb245975de642da9d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_6_6e8de59a108043ce972f4e98a9a1cce1_e00bafcc3d924c7fb076f7b484d1a08b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_7_7324060dae6d4e538a809c67ba1e57bd_f3da8597bf544ebea97f71d787e766bb_master.jpg",
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_8_2bb81b7628634c65ba25be7f36773bd9_9e89118014d146678c0428107fbc5f13_master.jpg",
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_9_a7f6be184d3541e69668789a2ac99669_48481aebe4f24ec6ae4c3a741bbef63a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43grd_3amtm1234_10_2336c8ce721746ca9bceeb150fdbf07e_816a31fc6b2e40c4a7114b8d626a781f_master.jpg"
            ],
            '#C4A07C': [
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_8_6cd737a69abf4025be6928d9e0219065_904b1b7b4d514963af8c8e1910c2f780_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_9_dffa617cc488404d9f83212e3078c4f8_4810a797d3ed4170a2970db112501dba_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_3_f662e53a18854b2189faaf5798a801bd_c8ee8ee89ad249ae80ac2f382f7c74c9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_4_113a559dcc204bf9971b6e24d99b7054_6629a1d5bc894a7d812cbec9b5fb11ec_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_5_6e9900621c9f4dfbba1929366553abd6_b9fb44675b1b4ff09f004cd9f32717e7_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_6_064f4cc54fbe4d59a117a1a7eb394ba3_d15ea8f56a664e27bbf13b8898cc58f5_master.jpg",
                "https://product.hstatic.net/200000642007/product/43bgs_3amtm1234_7_d078876b26504e45923a28d5c446e077_4c97404316454f0991a0aea497bd04cd_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_8_75fa1a2197d641f5ab6cb990fc65134e_6d84bc91acdc4cecb2dd79c49d3c673b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_9_6e415827f2794319bd322d809bb34252_7afeb34cd86545c688d1abac4a71ecce_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_3_9681af0714cd40e3a258c987293ac36a_94c10816e9a1414998bba39f6facc788_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_4_a81de69db6df4fd1960cbe7a1898b730_828a81e1ecde4b1db6756cb5bbdca74b_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_5_1e37c8af9d7b4e76a1b8ccd8276ee4b8_450e8e1aa7194ae1a78c498607849501_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_6_42a3b33cbfda4d7190b8327990cadaac_2fe2e306d9bf432eb60124620150071d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1234_7_bafaa00b484e4dd0a641b3704bf07b04_bd1a38fe07d94f87812c51fc661bc6c3_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Like Pop Art',
        price: '2,690,000đ',
        colors: ['#98C1AF', '#DEDACF', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#98C1AF': true,
            '#DEDACF': false,
            '#000000': false
        },

        linkImg: {
            '#98C1AF': [
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_1_5b33b42fbed049cfb8603c956d38b75e_66fe63a7db81438594c2fe2a895358cf_master.jpg",
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_2_50bf5845fadd4c10a06224bf3ae1cef3_09a461ababc6407d981ed54ff35ba8fd_master.jpg",
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_3_9371b27fe08948e6914fa906b9513c05_c1729995f38649b2b8803ff5783e4b7f_master.jpg",
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_4_cac6491c7f0447b8ad1b12b832aab76c_b1a5fa14df764022b48d6ab9b0297a22_master.jpg",
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_5_2658aa94d5354a53ab6755f167806668_ba36b51ce8f44aaba7d673263081790b_master.jpg",
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_6_c805369a6c904187b513eac5e2aeb962_f7cb9cfaa2164125902563b2244d52bb_master.jpg",
                "https://product.hstatic.net/200000642007/product/45mtl_3amtl2034_7_b5973d7a509b42338db8bf962d247c43_0edfea0b67644b23bc9a007710f54c76_master.jpg"
            ],
            '#DEDACF': [
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_1_c6eb4b48216c4791a18f5d9ab1fe3ad6_6428b6385a66419ba5ab69ec0cee27c9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_2_8e0473037c61457d94d3efad0d75a04a_515eae93edaa40c78c068c2eb35faf9a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_3_49c6b2fe90564ad8ad3b93007d8296b7_a0c0808cc7d24bbaa3529b13192ab5ed_master.jpg",
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_4_572f0cf1dd8942299b8c133f08f009ff_0d87f58f8c224b969f67e05feaa40d41_master.jpg",
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_5_c3b377fc9fb1468cb57805617ffed5c2_dcd946dbbea94af8ab73599bfb96d8db_master.jpg",
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_6_8983526ca9164d2f8698be48ad190592_c0a3d2ec505b49009166133927960a5e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50mgl_3amtl2034_7_7789904410fd4792aadc3cbf1fab00a4_7aa31b4f5046404fb8731f597e8e8d32_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_8_0972628640ea47109261dc09f42f339c_d701038250904e2eac7b590385e3be99_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_9_a4ce5a80685d4f4f8291b2c19b99597e_5ab6178c5260413e94c3bf81a2c6abe3_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_3_2687017cb4944e91896cc8d541a28075_b9967c46df1846e593996d3387f2b5fa_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_4_4bde9b682b3d4386af69bb5f65980e89_82b29976438b42658e737aae597ba834_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_5_380b9ec11a95495d9b0e5729c7dcb7aa_9f822222ab0e4c80ba1da09535d5f58d_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_6_d404cd2127204ea7a8f6f5b81e5ebedf_ab3337776a49446eadac3894fa6fdccd_master.jpg",
                "https://product.hstatic.net/200000642007/product/07bks_3amtl2034_7_72a291ed5d3b4dfc9b0255cc488356df_d21b6d980f9c43f6a86c6bace74a1497_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Like Daily',
        price: '2,690,000đ',
        colors: ['#DFCAAB', '#B8DFD4', '#D4DADA', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#DFCAAB': true,
            '#B8DFD4': false,
            '#D4DADA': false,
            '#000000': false
        },

        linkImg: {
            '#DFCAAB': [
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_1_326f010c0ffa4cbdaff7cb8baae19f88_b7979da715f44617aed789a6051315ca_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_2_a185ee4a65f547e3a8a69c52966755dd_7c7c0a406b3c4ce692551a3b0e1f2d06_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_3_9a76244a5afd4e7c9f457efeae87bfce_101b64679f894756803e6786ca270793_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_4_1caca755d6414c28a27e9000f0d16417_3bed6ad138eb4a40bdcb47cf74314968_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_5_5ade989d4ccc4f9e94418d768bd6bf6b_af6ad4f1062d4ee09fe0d7b974f58b0d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_6_4efa9de81b8c4417a3fb96d0d8906e5b_5b60566f44a34ed596acc34d70b5f57d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50sal_3amtl0134_7_195f9917ffe349ec96f134615756ff18_0beb69720473477d96f7532b5c0f6c4c_master.jpg"
            ],
            '#B8DFD4': [
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_1_fa90bf5b9fb145859b3acc0a4dce9798_6ec08e839a664dffa88e5daeea940cb9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_2_bcb1a386c84d4878a308fee25819c692_cb9c6ff424c9438abc56deb9946fb07b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_3_534076b9283649819cc2d17be505643e_1434954d7b064527baf6cab3c4eb25af_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_4_e73a6e02686347d09e889acd7972680f_096065806ee94fb2a3a33f561eef01b3_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_5_7581fecd50ea4e558a62eae70de981da_08d8325c70c543809042b9f28041cb98_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_6_e2bffc73059a4daabcb722f13895825f_b27edd7e58dc4fe0b35550a617d93f48_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3amtl0134_7_390ce7738e514c0c97aacaeefa5a2a6e_3b2bc50da08a462ebc39ff0d67fb59d1_master.jpg"
            ],
            '#D4DADA': [
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_2_bddeede486e040fe876331d00b665103_e45d1715c84b41d08c34ef6dad963964_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_3_09c52ec7a04443b9be492a977b9fe8f8_0c5b84df94134b018cc59065ebeb9386_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_4_5dc44a584493482f8172f316f6e07dc9_77296c9781564ebeb72a572e3a12e8f0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_7_2a93ced4bcbf47f2a0da235ef073d08b_18f6573e0a064e35a7dac98379c05b7d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_8_75ce14c31b7f4fd7bb09f716c6a7b38c_b7f220b5a340481892dc6f1b4d3cf5fc_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_9_c07b445aaec349a18ff5d858faea102e_98adcf12d3554b3a842c3530f46d58c0_master.jpg",
                "https://product.hstatic.net/200000642007/product/43mgl_3amtl0134_10_6b5b602b28e34eca8fc1dd9f45265b3b_5bdd63aec78046d3b51ca115879dad63_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_1_d2396f9e73964054a2751d0af2b73cbd_dca12c4808564431952a1466abdafcd9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_2_bcb8587238da496b985d97235cd1f061_fcde82828764471697cba2a97b110cfe_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_3_1a6f4d84e8254f9ebae837f4515a82a9_ab8272e04971429cb9957e0943a6e6a2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_4_67bf5082def74d1e91f0f6afde57fdaa_a986629d613c42af804cfe835dee47cb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_5_7da00dca08cc4ec383ba1980c6e74bf5_52789453fc9d46f1aff01f01042a9caf_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_6_aca1a41ccc904d00b8311955b0976a32_b19db8e0664d4f329fc52744dcafd303_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtl0134_7_d99693e0d500450ebb9f5b7c287e1d33_33254ba5a90b4b9ab6f8cf9f5e12dd94_master.jpg"
            ]

        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Classic Monogram',
        price: '2,690,000đ',
        colors: ['#E3C0C6', '#E1E1D5', '#262D3D', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#E3C0C6': true,
            '#E1E1D5': false,
            '#262D3D': false,
            '#000000': false
        },

        linkImg: {
            '#E3C0C6': [
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_1_137a313e670a4614a13b4947fc841332_1322a4f3f86b44a7af9dd7f0a63e2972_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_2_c8e6e6606c2b455dadf947923eb6789f_e48e73bdc3ce4d98a6ca4ce8ec8992df_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_3_37a3d1a783ee426fb353b4f4e388cabd_1ccd6d1dc48d4c858e04718da8681a9a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_5_02f2e7fcbea344afb53a864376fc6238_e0fc95d8315b4309a02f5801c571babd_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_6_ef126479236646eeae21b54a66514b42_d9b217312ba641a9a6610e8dcf9983c5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50pkl_3amtm0234_7_0f68517c8eda479faffb9cb54c60b153_a5fdd3d3ce45498ba16c6e73dce3cd63_master.jpg"
            ],
            '#E1E1D5': [
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0234_1_3e22668c072e49dc96b66eaa46fc8206_54912c1c0fdc4bc387aa36cb6b97bc11_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0234_2_254919121e2f4d5e8a7e0af8f1d595a1_362efcf838b6487ca33de4397eae52d1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0234_3_e972a63d67874ea0b4660d9d541dd26d_4be590d535dd48d499783ee35b50ac64_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0234_5_cde1f249453a4fea833ca8f68936d07c_7c72845845894016844c6f1c03e717df_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0234_6_8310ca575b5a4d22b0c067addcd374fc_d834d4f851bf462aa719b93d2cab80c9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crd_3amtm0234_7_fa0f550cfb5d40b68c2e968a8a336c00_16558073087049189093e34373ed3139_master.jpg"
            ],
            '#262D3D': [
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_2_356b800f05de4e3ea018aee7e62c43b7_35f79d38270b4079b7fe37f4cd89f2ca_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_3_67b5571cea5a41b5985c3f445349391f_ed786706511c43c5a9268ba69611fb8e_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_4_6d9e042efced4078b6fe0d2cc06364bf_0f004d21c18544368ae511a69c7d29fc_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_8_0fa0ac82e5504853b3084dee5c763305_b7a58df2c3724ba29dfbb009d7bd2c61_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_9_c8a6851fde5d414187aaf050d7e7eecf_bef0740b03fd4ea6b5274d407b4c08ee_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nyd_3amtm0234_10_ccd6a4821d9440129c59ffa3ec266720_342e0c1ed23d4a54bf486318180c357a_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0234_1_be0e924c9e2140e283d8a5967b073893_c27b10e222984afab58df02e6dd65c0c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0234_2_ddf16883253f49f6832a9e5d3f4eb1db_6f18ad70ad8b4023b60571b59c517e8d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0234_3_5d495e4d49b946349da33a3c4ffa981b_4d5af711d30742a5b435167aebb6ed25_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0234_5_9a26fe5efad640858bf991392829149c_9ac158043d0c42cdb1216d5f8f722296_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0234_6_53a4cf2fa1824a60b1523bb7bf2e3cdc_f755dfe68c06452994ae45fdcf65d005_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm0234_7_cf817788c2ee4e999d1386996e36d48d_f93b1c3655614347a5ead92dab94b459_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Classic Gradient Monogram',
        price: '3,190,000đ',
        colors: ['#F4F0E5', '#734837', '#000000'],
        category: 'Áo khoác',
        rating: 4,
        checkImg: {
            '#F4F0E5': true,
            '#734837': false,
            '#000000': false
        },

        linkImg: {
            '#F4F0E5': [
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_2_c795521c45714cb1a78b961ecd831b71_3f55d98816144e23a6f2fc48cd267386_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_3_0ceff10e8a5f4523ab40d7dedd1142da_f352f57b1f554e4c8331a3070f89fcac_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_4_df0953fbb7a746469c8faeeead9b3f58_ecc72d10614a440ea7b7a540d62ef696_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_6_c66a6da5b37e4a8fa8a29346023f972d_8f0f7383793d4881bd2afa746d0876e5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_7_2884130b3ea94059831a329940381307_8feaa804ba9d4a51b5979f5fa81c192d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_8_879c7096c9ff4e6298de7b6091023a11_c00ef184a66a4c10a65b0007511cc8e7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3amtm1334_9_d33a01d90b9047ffbc92675f093e9676_388f035d44cf4b7999393e400361d794_master.jpg"
            ],
            '#734837': [
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_1_35621ee9833743b2ace9fbe13ca85b24_b058b5d0fb544ee0a5260d88ea9fb2e9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_2_fec285df33bb406e92287f96b9276418_a1352b77252f4c1b9833b6f82ccbaba9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_3_63d9b81b54104f6d891b0da4a5d38035_f3908536a3fb4775b956df9db0dfb55b_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_4_9480e3e09e364fd685d9af25ece1dc84_4bf8243d4f6647518770edca3c6e3a54_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_5_debcec04524c49f49969405a6c32f160_eb8ff0db347c48c2b65c684e1f5f8d6d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_6_4ae182d17b2a4d7e8f0a52ac63dc1fcf_4ae23bc074114b52a24f4a7a4c3fbde6_master.jpg",
                "https://product.hstatic.net/200000642007/product/43brd_3amtm1334_7_28408d05e74740ba92d3e4e3a66b0e75_c0dac8697ce44007a901ec06ebd2552f_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_2_f019614535214d17a31eaebe73969204_d3a17038e74c4e47b43054785cb0eaff_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_3_c088a5af87f24ed7873a7eed77556d2f_d8e757f692c34cc1883219114a9e4097_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_4_6aba8f8eff594254a8264e33da6230dc_c02bbf514af64591a3c1438f830ecb23_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_7_fcbffa34524046a5b2e90bd7701a9789_ca7d19d701b640bdafa68e366d180854_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_8_8b2c7f272d53439c8d48936dee7ae135_7dd92516a1854f128715d5cb92b002c2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_9_9cb3a5de623b4143ba265d47f55c8d16_87e00616292943edb59de39a9da40a3a_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtm1334_10_911aef603fdc4d438aa8bf21083a1481_2656cb2e795249d2ac945c31ba44422d_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài bo gấu thời trang',
        price: '2,690,000đ',
        colors: ['#D48C07', '#A7091E', '#103880', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#D48C07': true,
            '#A7091E': false,
            '#103880': false,
            '#000000': false
        },

        linkImg: {
            '#D48C07': [
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_1_f2b0b90a30ad4d9caaf33e205fe7d433_f3495d0914e940cfa53eafdd08c92d9d_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_2_324fc287346f4d3b8ff9d2b33ab4d9f0_42bc9843dab94508b9162aaa3400a1aa_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_3_7d8d8e83786d4ba988b34828a99cd13c_43fb2afcc4f84cbcba18f7a1ecefecba_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_4_229a4b5999854ae4bfac0afb0374a131_1599c0cbc7134ed580c73fbfb93486c4_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_5_f4797a70d79c4b8fafaf1d375f075a31_ceedb52a1f7c43fe9830f99193415fb9_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_6_6d2174735bf44ec394325e0dc591759d_abc21d719a394bd8be63c488e4d5843f_master.jpg",
                "https://product.hstatic.net/200000642007/product/45msd_3amtv1034_7_2afef0c8607749eba603593f7f78398f_189b8f7043074c4c8d822cd8ae0b73cf_master.jpg"
            ],
            '#A7091E': [
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_1_06cb8f72a3464655896c39013f77ce43_a2519f70ded844fdb7b0d5c93c73674d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_2_0cff38372c89491ab24233e1e8147143_4f458bd3b25d4797abd2e2609174c5f6_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_3_59a6cda425d6475f806084b7e89d6819_1e2b806f3f14482da7c058f900adf17d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_4_ef48cd0abfe9408b9e7010f2f9c3cd99_6d5f0af56b2e4b1bb48560bf2eee3e0a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_5_6f506bd0fa804f7fa47ae9df2c7d2a26_1ec98fc7422440e48dde793080b18039_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_6_7f0bf84d5c3c4b84b6c9df04b84b4369_50b332154e1d438cb773ebbb5ec91426_master.jpg",
                "https://product.hstatic.net/200000642007/product/43rds_3amtv1034_7_d2468a7024b94f03adb6baa3609e8962_47733bed5f8f403fb4fb5d0c6f4d8654_master.jpg"
            ],
            '#103880': [
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_1_cff56afff5ed4e8bb8f0b072c71fd203_8037a2e8c2314d90bdc29a2263b8e7b2_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_2_4f8e0f540630464494d1dee3a8043efd_76cc425232bd43d18383eb45fe143c0c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_3_f69429b90e354cf4af5c26f1add77a04_5d6ad8d560b94b30943b3efcde3284cf_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_4_511293fb74274f2980da265f33d5e625_e54cd68c8f85479c9f06ce73659b6a84_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_5_8f3a9105aff24d05ac9dd14378bc4e3d_c46dbc3ea7094e829daccac26ca034de_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_6_00f0b847455b40d580a8a998f00108d0_81a107212a4b4a03b63e2d79e1bb0998_master.jpg",
                "https://product.hstatic.net/200000642007/product/07cbd_3amtv1034_7_3e9febe7a94d4cf786a1dacf1645fa8f_f32bd13ad291420ea28aa0f2799e490e_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_1_28a4b7fee4b349478b3768dc6b93384a_b32380ff3cf0461598e8a90b17d0f1e7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_2_941ecdbecba1404281beb1e0d32b2a6f_ed018a448242428cb8e92228dca721b2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_3_2c67230e0b73493e98bee5ebae6f30b0_95470870b9884182817d2b443b647331_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_4_f3e76d19583046819d43288819b71632_85e4e6e5679d48b687c550679f9e972c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_5_759fbad8c9ce409298d0266b8212b00b_f7fbcbdb1a5142228dbedff0ba361922_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_6_2eb360d6a47e4392b5213f5090f5d8cf_fe1ca7d5ea4e4e949e0318c040a4b5d7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtv1034_7_aba0eda6c3cc4888899c4ee4c9a28af8_76e6c7fd3f334ecf876f81b2b77d2cfa_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo sweatshirt unisex cổ tròn tay dài Basic Bling Mega Logo',
        price: '2,690,000đ',
        colors: ['#1C2842', '#0D3831', '#000000'],
        category: 'Áo khoác',
        rating: 5,
        checkImg: {
            '#1C2842': true,
            '#0D3831': false,
            '#000000': false
        },

        linkImg: {
            '#1C2842': [
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_1_7d111ddc303d4e7cb124735e2ba0e77b_9b308f7484c84cd381a804fba837ff3a_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_2_6db3ecde762247758864ae2e78e48d33_0e064325e589405f9fdb7a22b4908e77_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_3_c29600ce8e7c49cda6cb763079242d56_6abff772cc42434cb594e9e16dcdb1a9_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_4_6fbd640a364e4199a10ed6ed56843512_315e1f1fbacc4faca0a730b4ffa33577_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_5_4d21856b513142daac3b4109b2d3d4bf_b6687de33b0d4d13b67faaf60d00013b_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_6_a449cfab9aab4729a763a07a765712fb_da5bd0dffaa64041aa87680c26a6e59c_master.jpg",
                "https://product.hstatic.net/200000642007/product/07nys_3amtb1034_7_fe7c81d5a1d7480da9f13c55ffb409cc_6de97f21d7754908868d6be043dfc7ae_master.jpg"
            ],
            '#0D3831': [
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_1_d56040f24f8645319758a6795aed94a1_df19458f40ef4821abcb6c1f8fa59d22_master.jpg",
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_2_a7968ec09c1746aa8d32172415a8205b_19e4c3448a7f49d0b3aa14eaac031eba_master.jpg",
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_3_caa4b03b613c41b8b1e5e9cefa07e280_1a94f892ee444268a1d79861e7696d1e_master.jpg",
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_4_dbb9236dd4824f7d8bf684e971bfeb86_802539a772da42ddb1513ae989d88b67_master.jpg",
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_5_49cfc06cba55473f8bbc24b5e51b229b_4323c2c05c1a45dd878e635522c68d16_master.jpg",
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_6_50251b3d5d7f4c0dafaacdeb9d7d3f36_736ba555ad9b4c2db45ad0e2802c424d_master.jpg",
                "https://product.hstatic.net/200000642007/product/43gnd_3amtb1034_7_33e0d585799e4ac09a145072fd9031a3_ba2185e614ab4156bc90e9fbe1285249_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_8_c82e49ac74c94dd2b072dea17a27ef20_1303723f2a6d415d966878cb86f56e88_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_9_e17d9a6d74ca4ecebc1e428eeaae74ea_a60c64d1af12445a8502558646ccc8ab_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_3_c26cb2ba70e14503b73ed5e11a2fc331_9f57afd702704c2dab7c019e9835defe_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_4_51f144f59d024995a4a9739197ce5a8a_e17acbef7b8a4a3c8c75d405634371b9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_5_ff37bec38f644e248bd26c2d2efbbdcd_d16c4106764344f69dee1bc9ae549812_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_6_39b3b53a718c4794a972de02a63cdf99_aaf4382f66c34a3a93fecd126a5ce0ec_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3amtb1034_7_e953ebad11a44ae3ab5f6abc0cee21c1_3b5e84e2f86f44b7ae008ab05c25be48_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            '#EBE7DC': [
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_1_dc86c45439d94bd6b91424b0c3e038f6_7e523f4e5da5495fa63c7094e56b1384_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_2_3b2b3a227695492899d9ba0891a9b26e_4f2ace32e23e46559474f20de0a3dc78_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_3_1cb5945b55d440309213bc064b8abbf1_af7ea7ef917e49deac45ff67e5e314c2_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_4_e7852e5e476740f69e3d6556abfb7f38_86b5ed14b7814302a8542e12891e8040_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_5_517e0f5090fb49edabdf5a81b60f9ee7_38cf49a83e98452ebbb065758f5e75bc_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_6_25e2fd90b5474f148fe9f8f4b9a74686_12b32171ed58466a8acdf6beb4d1b02a_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_7_372aa1b032de4267b217f3a022e4b32f_4849798659b741109e8f30a2c38d2c48_master.jpg",
                "https://product.hstatic.net/200000642007/product/43crs_3ahdo0134_8_a10cc74d887944d7a01e35cf56ac05b5_3da85fb9740b4e3183d8fbbe24a7b5d9_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_9_884400e78aa14e5e8a1c5ab6209e047c_9de60b37899445a9b1db5acecb17830d_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_10_b4854e27c9234480b5790f4eb04af50b_b607f65da84a4b47afc412cd127c7ea6_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_3_9cb9dd4124634343b293a9ab0d55c3ff_b659d6fc82c6486ba8edb834cee61460_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_4_10b852838bd9425ca3711125012c3dd6_25ff903046f349528774a69d6e5496ed_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_5_6ae23f3b19a049b2b1e5dc8cb25d6a61_15bb322421f440f498ae7bbbd0f01802_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_6_d403a11e7c564d6a9d414a0b27bcf212_d3248d30433c4718b0c40588e9503bcb_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_7_198d395435a649e9910ab1d826adba43_571bfbc1faf64ddbb5606637ebbcd634_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdo0134_8_d11a8efa75d941a4aba78dd1052e2179_f7ec7251fcb94915a62f4b99e52bc880_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
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
            '#EBE7DC': [
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_1_8670c34f673447069784fb06a93df687_3b4e3fa879724b04bfb45a258e59c748_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_2_e16f9a104fa94bcdb46d45b9cf06759c_2c993febba7b4e96b082fa7187b473f4_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_3_5aeb9114786649c78847db043707695a_e7d962d8ddb04cccbb8eb0bdef971e1c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_4_46aa14bcab344454b35202170e05671f_540d20bdcbd64ebc91ed796849c49872_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_5_5ce2fef6e5db48438dafbcb94bc9b8d6_23e50f0d0c6649a4a0fc4f2e1693d0ea_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_6_58aeb2b40bb04bcd8cbed7f20ff271fe_0e655068e62741d88fe87dafac46bcc0_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3ahdb0134_7_3403ab471cb746448828438cd18b4581_24a8c30e240b4e6588d0a1ab9641f457_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_2_dcebb0cc2ab446a9869c4a83062b9f5c_eba280853cc44e24ae44597c4c46d938_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_3_f30b8013b6ff4980835b9df0d2ee7741_1010717921674d648d1a2707704fe7c7_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_4_2751196ae8294fadb3683fe8d121e4b9_8df56233a78a46a09e9ca83cfc2a0643_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_7_2fadf8d00b244d52a4d7ad55d6113bb7_f91a1cb9b136481eaecf29b9e0026b6e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_8_0a7194f7cf474a39a5feb2fa7f6c7ab6_92ddd768d0f5499fa5826207e91930c8_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_9_02a17b730fbe4506ad2ec3b7c43d456e_c87b7e0748834f1abc6994538e5b3eed_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3ahdb0134_10_c5627f8895fb44c89e294b38c03cffc2_cf2dee4c14964cd6b69fc114923f7496_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn trẻ trung thời trang cao cấp',
        price: '1,590,000đ',
        colors: ['#9EC9BF', '#EBE7DC', '#FB82B1', '#000000'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#9EC9BF': true,
            '#EBE7DC': false,
            '#FB82B1': false,
            '#000000': false
        },

        linkImg: {
            '#9EC9BF': [
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_1_0f6ddcf27aab4a4899af9eaf82fcd374_3422db4f80684065b3f22db6e5abffd5_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_2_4e82b818c6714884b6df09c62a4b8341_b70b90039f294fe980462eba2577e6a2_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_3_f09e43e5a2e94f44b6cc6d7491c263d2_f67a3165d52842e8b6d6ec34cc752327_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_4_547b5050401b448fb2adceeee8292aa2_b57ef9897eea4da88eec1bb7a4369ab4_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_5_032cff6341c5465c8314ce7e0b4f9da1_9dce944d9cc143eebf7f866b51bfe1b2_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_6_41c47a593db6471cb7ef7279d3d97009_7e20f7bd68cc4596b403a881a86cafeb_master.jpg",
                "https://product.hstatic.net/200000642007/product/07mtl_3atsb1134_7_22aa868a34cf4390ad16fa66c95d2078_1a2a821e318343d3887fe30a192d25b7_master.jpg"
            ],
            '#EBE7DC': [
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_1_82423cd33f2a488a9af1c971a0677651_40baecd376ef4302b9ba8dc42da74aff_master.jpg",
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_2_4a425b4ae5b04d979ef3aa1ee0e30ff2_e2a0b1c6549d47c9b2230b85adc4ac2e_master.jpg",
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_3_f011568e76d148cc9e8d0ea48384257b_7f79364a925347d596d91a621a3c811b_master.jpg",
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_4_d49464b15fe24e3892211edd1cb8259e_afc5f375e6d4428e9d64257852d11d35_master.jpg",
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_5_7a10e48289f641b988e0ea394f9a0ed2_2932a970a8fa48b599b8309bc082b84c_master.jpg",
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_6_eb23988e2b9943f5aa56419988814b9e_3e34499de3e84858ac136638133584c8_master.jpg",
                "https://product.hstatic.net/200000642007/product/45crs_3atsb1134_7_05523fedfefb46a1bb8efc6b4ba239a0_ef9b8eec63d74e1bad8ca5ce716679c8_master.jpg"
            ],
            '#FB82B1': [
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_1_499e15de499a4c40bd3e2be576ae91dd_e912f2b3fb4c4a5196fee7adce01aa03_master.jpg",
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_2_e0420bb68ba54c868002855b9379fb51_2652294519a54aef857a0d7745a19338_master.jpg",
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_3_07c7cd793b644df9a373d029278575c1_ab66990c30b444769a79110c79147657_master.jpg",
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_4_736b400e16d544dbafe2ddde5008003f_636342f2b32d4576adebb05ff3fd289c_master.jpg",
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_5_210dc006ef834930abca97a37ecd0a6b_27b3bb67b69e481ca71c6c5183727342_master.jpg",
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_6_f48206c561664aee814d0ff6c3483826_a67fdb077f244308b12776a8ff076bb9_master.jpg",
                "https://product.hstatic.net/200000642007/product/43pks_3atsb1134_7_4fdeb70cf24e49009cacee22e2d8afa2_f93fed591b704f0d92f254e539a6a5de_master.jpg"
            ],
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_1_846ff5288e4c49d7a2efef84ffac42de_875ac170798244f280fd1590ee12f471_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_2_6b296b81993b46eaa8da00e0ac8d01aa_0eb9a5a0615343b9b1bf3a122c3cd317_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_3_048037b3aaa444f896baa4ba3628f316_e8a5b58dc0cf49b4a391e174f9ecbd32_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_4_70519505c24943fd8ddc151868a3d488_787b27a7fbb14d138e794a7d3aacf7a9_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_5_4f686663b86e46e4b8b3807f6ad3073b_3469b9a7825747f087418b724c6dce29_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_6_83db23635d53416988208fd86e5e9bc0_ed955c638c2d4dbbb92a6ebed0128a13_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atsb1134_7_1d42b1ed970a4eb69607284468b2af46_3f338c3a0f464c839e6c3a5d815b29d6_master.jpg"
            ]
        }
    },
    {
        id: uuidv4(),
        name: 'Áo thun unisex cổ tròn tay ngắn thời trang',
        price: '1,590,000đ',
        colors: ['#000000', '#EBE7DC'],
        category: 'Áo thun',
        rating: 5,
        checkImg: {
            '#000000': true,
            '#EBE7DC': false

        },

        linkImg: {
            '#000000': [
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_1_58a83815ffdd4ee4af84bfd302b0d10f_f563ae171812431aad0e432f62f4fa50_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_2_d13931be0fc448beb68fca6bdc595065_3467f8828a2a4551b99bf6e585dffab2_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_3_26fdb2a368974fbe9a9ccacd3ada90ac_13b546992d2b4c66b9744e54b7d4652e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_4_92157ee52806416abedccf1f70613163_4ed97b42cb4c4e33b1130710643fd537_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_5_06ff9f3eb9eb45e2866fc1e650f2136b_9faecb22bd834eec9106b2ade6a69b59_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_6_58518eb11e0143a29431535a5c4e1ecd_73d6479805a1485f965fb357104aa63e_master.jpg",
                "https://product.hstatic.net/200000642007/product/50bks_3atse0134_7_91f0847295f84faf9796022ed9e4df36_5850368713e84add85ac57025cd6514e_master.jpg"
            ],
            '#EBE7DC': [
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_1_15b34f8ff5374dd487a7612ceda221b1_4cbcc193ef2847679d875138a8c456e1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_2_2c9acd85b4084610b00762e5c056ce1e_3be2641bddda4cb78004b43a2652706c_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_3_986a300ea5fe411fb90a01dccdcb5af6_582c44cf8fe94c43bd4781389d859841_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_4_d1a802eacd5f43aea5f8510964ba9483_58a7d718810848c39db1804ac2bab13f_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_5_f8f0c62c683a471f9b3a3fc293ee9bf9_1809d56f1e5648268192f7103d26d9a5_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_6_6cf7853cd7b44235a3ca48722148e3a7_4255531081f74e778a7d9b4d11380fb1_master.jpg",
                "https://product.hstatic.net/200000642007/product/50crs_3atse0134_7_9b7dab7d2d5e4720a6bfe9b271ee539e_ca0b54051aa84b49b2c24a6b4428e7a8_master.jpg"
            ]
        }
    }
];
export default DATAAO;