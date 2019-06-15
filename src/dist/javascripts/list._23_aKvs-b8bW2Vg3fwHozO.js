/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/javascripts/list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/javascripts/list.js":
/*!****************************************!*\
  !*** ./src/public/javascripts/list.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _ref = [parent.all.jq, parent.all.json, parent.document.getElementById('tagHref').getAttribute('src').replace('..', '/manage').split('?')[0], document.getElementById('container').getAttribute('data-uri')],\n    $ = _ref[0],\n    token = _ref[1],\n    u = _ref[2],\n    uri = _ref[3];\nvar _data = {};\nnew Vue({\n  el: '#container',\n  data: function data() {\n    return {\n      loading: false,\n      more: false,\n      tableData: [],\n      currentPage: 1,\n      pageSize: 20,\n      total: 0,\n      page: 1,\n      select: '',\n      searchVal: '',\n      searchName: '',\n      selects: '',\n      tags: {},\n      //待定\n      selectFil: '',\n      selectMater: '',\n      dateLog: '',\n      InputAndVisible: false,\n      //列表操作\n      formData: {\n        machineType: 1,\n        name: ''\n      },\n      TableAndVisible: false,\n      TableFormData: [],\n      UpdateTableAndVisible: false,\n      UpdateTableFormData: [],\n      listId: '',\n      productCount: 0,\n      productId: [],\n      ids: []\n    };\n  },\n  created: function created() {\n    this.list();\n  },\n  methods: {\n    IError: function IError(err) {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.loading = false;\n      }, 1000);\n      this.$message.error('错了哦，' + err);\n    },\n    ISuccessfull: function ISuccessfull(e) {\n      var _this2 = this;\n\n      setTimeout(function () {\n        _this2.loading = false;\n      }, 1000);\n      this.$message({\n        message: 'ok 了哦,' + e,\n        type: 'success'\n      });\n    },\n    handleSizeChange: function handleSizeChange(e) {\n      this.pageSize = e;\n      this.list();\n    },\n    handleCurrentChange: function handleCurrentChange(e) {\n      this.page = e;\n      this.list();\n    },\n    list: function list() {\n      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {\n        arg[_key] = arguments[_key];\n      }\n\n      var it = this,\n          xml = [];\n      it.loading = true;\n      arg == '' ? null : ~function () {\n        arg.forEach(function (arr, index) {\n          if (arr.indexOf(':') != -1) {\n            //处理2、3数据\n            _data[arr.split(':')[0]] = arr.split(':')[1];\n          }\n        });\n\n        if (arg[0] != '' && arg[1] != '') {\n          //处理1、2数据\n          _data[arg[0]] = arg[1];\n        }\n\n        ;\n\n        if (arg[4]) {\n          //处理时间\n          _data['startDate'] = ym.init.getDateTime(arg[4][0]);\n          _data['endDate'] = ym.init.getDateTime(arg[4][0]);\n        }\n      }();\n      if (uri == 'manage_prodcut_list_list') _data['type'] = 1; //临时处理存在此接口存在type 数值问题\n\n      if (uri == 'manage_machine_version') _data['type'] = 1; //临时处理存在此接口存在type 数值问题\n\n      if (uri == 'find_machine_advertisement_list') _data['type'] = 1;\n      if (uri == 'manage_advertisement_list_list') _data['type'] = 1;\n      if (uri == 'client_user_list') _data['type'] = 1;\n      if (uri == 'manage_dividend_list') _data['type'] = 1;\n      _data['page'] = it.page;\n      _data['pageSize'] = it.pageSize; // token.secret\n\n      ym.init.XML({\n        method: uri == 'find_machine_poi_list' || uri == 'get_activity_list' || uri == 'statistics_list' || uri == 'maintainer_list' ? \"GET\" : 'POST',\n        uri: token._j.URLS.Development_Server_ + uri,\n        async: false,\n        xmldata: _data,\n        done: function done(res) {\n          ym.init.RegCode('200').test(res.state) ? function () {\n            switch (uri) {\n              case \"admin_list\":\n                for (var i = 0; i < res.data.list.length; i++) {\n                  xml.push({\n                    id: res.data.list[i].id,\n                    adminName: res.data.list[i].adminName,\n                    phone: res.data.list[i].phone,\n                    realName: res.data.list[i].realName,\n                    weChatId: res.data.list[i].weChatId == -1 ? \"无\" : res.data.list[i].weChatId,\n                    headImgPic: res.data.list[i].headImgPic == -1 ? '无' : res.data.list[i].headImgPic,\n                    nickName: res.data.list[i].nickName == -1 ? \"无\" : res.data.list[i].nickName,\n                    parentId: res.data.list[i].parentId == -1 ? \"无\" : res.data.list[i].parentId,\n                    parentAdminName: res.data.list[i].parentAdminName == -1 ? \"无\" : res.data.list[i].parentAdminName,\n                    parentRealName: res.data.list[i].parentRealName == -1 ? \"无\" : res.data.list[i].parentRealName,\n                    isService: res.data.list[i].isService,\n                    status: res.data.list[i].status\n                  });\n                }\n\n                break;\n\n              case \"find_log_list\":\n                for (var _i = 0; _i < res.logInfoList.length; _i++) {\n                  xml.push({\n                    adminName: res.logInfoList[_i].adminName,\n                    logContent: res.logInfoList[_i].logContent,\n                    logTime: res.logInfoList[_i].logTime,\n                    permissionName: res.logInfoList[_i].permissionName,\n                    realName: res.logInfoList[_i].realName,\n                    roleId: res.logInfoList[_i].roleId\n                  });\n                }\n\n                break;\n\n              case \"find_formula_list\":\n                for (var _i2 = 0; _i2 < res.formulaInfoList.length; _i2++) {\n                  xml.push({\n                    formulaId: res.formulaInfoList[_i2].formulaId,\n                    formulaName: res.formulaInfoList[_i2].formulaName,\n                    createTime: res.formulaInfoList[_i2].createTime,\n                    machineType: res.formulaInfoList[_i2].machineType,\n                    formulaTemperature: res.formulaInfoList[_i2].formulaTemperature\n                  });\n                }\n\n                break;\n\n              case \"find_product_list\":\n                for (var _i3 = 0; _i3 < res.productShowList.length; _i3++) {\n                  xml.push({\n                    productId: res.productShowList[_i3].productId,\n                    productName: res.productShowList[_i3].productName,\n                    productPrice: res.productShowList[_i3].productPrice,\n                    productPicurl: res.productShowList[_i3].productPicurl,\n                    machineType: res.productShowList[_i3].machineType,\n                    formulaName: res.productShowList[_i3].formulaName,\n                    bunkerNumber: res.productShowList[_i3].bunkerNumber,\n                    createTime: res.productShowList[_i3].createTime,\n                    productRank: res.productShowList[_i3].productRank,\n                    productComment: res.productShowList[_i3].productComment\n                  });\n                }\n\n                break;\n\n              case \"manage_prodcut_list_list\":\n                for (var _i4 = 0; _i4 < res.productListList.length; _i4++) {\n                  xml.push({\n                    listId: res.productListList[_i4].listId,\n                    listName: res.productListList[_i4].listName,\n                    machineType: res.productListList[_i4].machineType\n                  });\n                }\n\n                break;\n\n              case \"find_machine_list\":\n                ym.init.XML({\n                  method: 'POST',\n                  uri: token._j.URLS.Development_Server_ + 'find_machine_number',\n                  async: true,\n                  xmldata: {\n                    id: ym.init.COMPILESTR.decrypt(token.id),\n                    token: ym.init.COMPILESTR.decrypt(token.asset),\n                    url: u\n                  },\n                  done: function done(res) {\n                    it.tags['machineCount'] = res.machineCount;\n                    it.tags['offLineNum'] = res.offLineNum;\n                    it.tags['starvingNum'] = res.starvingNum;\n                    it.tags['faultNum'] = res.faultNum;\n                  }\n                });\n\n                for (var _i5 = 0; _i5 < res.machineShowList.length; _i5++) {\n                  xml.push({\n                    machineNumber: res.machineShowList[_i5].machineNumber,\n                    adminName: res.machineShowList[_i5].adminName,\n                    machineAddrDesc: res.machineShowList[_i5].machineAddrDesc,\n                    machineType: res.machineShowList[_i5].machineType,\n                    machineSn: res.machineShowList[_i5].machineSn,\n                    machineScenePicUrl: res.machineShowList[_i5].machineScenePicUrl,\n                    wxacode: res.machineShowList[_i5].wxacode,\n                    onlineStatus: res.machineShowList[_i5].onlineStatus,\n                    failureStatus: res.machineShowList[_i5].failureStatus,\n                    materialStatus: res.machineShowList[_i5].materialStatus\n                  });\n                }\n\n                break;\n\n              case \"manage_machine_version\":\n                for (var _i6 = 0; _i6 < res.machineUpdateList.length; _i6++) {\n                  xml.push({\n                    mUpdateId: res.machineUpdateList[_i6].mUpdateId,\n                    mUpdateVersion: res.machineUpdateList[_i6].mUpdateVersion,\n                    versionCode: res.machineUpdateList[_i6].versionCode,\n                    mUpdateTime: res.machineUpdateList[_i6].mUpdateTime,\n                    mUpdateDes: res.machineUpdateList[_i6].mUpdateDes,\n                    machineType: res.machineUpdateList[_i6].machineType,\n                    mUpdateUrl: res.machineUpdateList[_i6].mUpdateUrl\n                  });\n                }\n\n                break;\n\n              case \"find_machine_poi_list\":\n                for (var _i7 = 0; _i7 < res.poiList.length; _i7++) {\n                  xml.push({\n                    poiId: res.poiList[_i7].poiId,\n                    longitude: res.poiList[_i7].longitude,\n                    latitude: res.poiList[_i7].latitude,\n                    addr: res.poiList[_i7].addr,\n                    mapMarkerIcon: res.poiList[_i7].mapMarkerIcon,\n                    province: res.poiList[_i7].province,\n                    city: res.poiList[_i7].city,\n                    district: res.poiList[_i7].district,\n                    machineUrl: res.poiList[_i7].machineUrl,\n                    hide: res.poiList[_i7].hide,\n                    machineCount: res.poiList[_i7].machineCount,\n                    numberList: res.poiList[_i7].numberList\n                  });\n                }\n\n                break;\n\n              case \"find_machine_advertisement_list\":\n                for (var _i8 = 0; _i8 < res.machineAdvertisementList.length; _i8++) {\n                  xml.push({\n                    madId: res.machineAdvertisementList[_i8].madId,\n                    madTitle: res.machineAdvertisementList[_i8].madTitle,\n                    madUrl: res.machineAdvertisementList[_i8].madUrl,\n                    madStatus: res.machineAdvertisementList[_i8].madStatus,\n                    madTime: res.machineAdvertisementList[_i8].madTime,\n                    madOrder: res.machineAdvertisementList[_i8].madOrder\n                  });\n                }\n\n                break;\n\n              case \"manage_advertisement_list_list\":\n                for (var _i9 = 0; _i9 < res.advertisementListList.length; _i9++) {\n                  xml.push({\n                    listId: res.advertisementListList[_i9].listId,\n                    listName: res.advertisementListList[_i9].listName\n                  });\n                }\n\n                break;\n\n              case \"statistics_shop\":\n                for (var _i10 = 0; _i10 < res[\"package\"].ShopMachine.length; _i10++) {\n                  xml.push({\n                    adminID: res[\"package\"].ShopMachine[_i10].adminID,\n                    adminName: res[\"package\"].ShopMachine[_i10].adminName,\n                    payMoney: res[\"package\"].ShopMachine[_i10].payMoney,\n                    payCount: res[\"package\"].ShopMachine[_i10].payCount,\n                    machineCount: res[\"package\"].ShopMachine[_i10].machineCount,\n                    realName: res[\"package\"].ShopMachine[_i10].realName\n                  });\n                }\n\n                break;\n\n              case \"get_activity_list\":\n                for (var _i11 = 0; _i11 < res.activityList.length; _i11++) {\n                  xml.push({\n                    id: res.activityList[_i11].id,\n                    comment: res.activityList[_i11].comment,\n                    name: res.activityList[_i11].name,\n                    startTime: res.activityList[_i11].startTime\n                  });\n                }\n\n                break;\n\n              case \"client_user_list\":\n                for (var _i12 = 0; _i12 < res.clientUserList.length; _i12++) {\n                  xml.push({\n                    userId: res.clientUserList[_i12].userId,\n                    headPicUrl: res.clientUserList[_i12].headPicUrl,\n                    nickName: res.clientUserList[_i12].nickName,\n                    mobile: res.clientUserList[_i12].mobile,\n                    userType: res.clientUserList[_i12].userType,\n                    source: res.clientUserList[_i12].source,\n                    userStatus: res.clientUserList[_i12].userStatus,\n                    registerTime: res.clientUserList[_i12].registerTime,\n                    compensateMilliliter: res.clientUserList[_i12].compensateMilliliter,\n                    memberMilliliter: res.clientUserList[_i12].memberMilliliter\n                  });\n                }\n\n                break;\n\n              case \"get_member_list\":\n                for (var _i13 = 0; _i13 < res.memberRuleList.length; _i13++) {\n                  xml.push({\n                    memberRuleId: res.memberRuleList[_i13].memberRuleId,\n                    memberRuleName: res.memberRuleList[_i13].memberRuleName,\n                    memberLevel: res.memberRuleList[_i13].memberLevel,\n                    duration: res.memberRuleList[_i13].duration,\n                    payMoney: res.memberRuleList[_i13].payMoney,\n                    discount: res.memberRuleList[_i13].discount,\n                    discountsStartTime: res.memberRuleList[_i13].discountsStartTime,\n                    discountsEndTime: res.memberRuleList[_i13].discountsEndTime,\n                    milliliter: res.memberRuleList[_i13].milliliter,\n                    memberPicUrl: res.memberRuleList[_i13].memberPicUrl\n                  });\n                }\n\n                break;\n\n              case \"find_fault_feedback_list\":\n                for (var _i14 = 0; _i14 < res.faultFeedbackShowList.length; _i14++) {\n                  xml.push({\n                    nickName: res.faultFeedbackShowList[_i14].nickName,\n                    faultPhone: res.faultFeedbackShowList[_i14].faultPhone,\n                    machineNumber: res.faultFeedbackShowList[_i14].machineNumber,\n                    machineAddr: res.faultFeedbackShowList[_i14].machineAddr,\n                    faultTime: res.faultFeedbackShowList[_i14].faultTime,\n                    faultContent: res.faultFeedbackShowList[_i14].faultContent,\n                    orderId: res.faultFeedbackShowList[_i14].orderId\n                  });\n                }\n\n                break;\n\n              case \"find_coupon_list\":\n                for (var _i15 = 0; _i15 < res.couponInfoList.length; _i15++) {\n                  xml.push({\n                    couponId: res.couponInfoList[_i15].couponId,\n                    couponName: res.couponInfoList[_i15].couponName,\n                    couponType: res.couponInfoList[_i15].couponType,\n                    couponRangeName: res.couponInfoList[_i15].couponRangeName,\n                    couponMoney: res.couponInfoList[_i15].couponMoney,\n                    couponTime: res.couponInfoList[_i15].couponTime\n                  });\n                }\n\n                break;\n\n              case \"find_order_list\":\n                for (var _i16 = 0; _i16 < res.orders.length; _i16++) {\n                  xml.push({\n                    orderId: res.orders[_i16].orderId,\n                    spendingMoney: res.orders[_i16].spendingMoney,\n                    paymentMoney: res.orders[_i16].paymentMoney,\n                    paymentType: res.orders[_i16].paymentType,\n                    consumptionType: res.orders[_i16].consumptionType,\n                    orderStatus: res.orders[_i16].orderStatus,\n                    paymentTime: res.orders[_i16].paymentTime\n                  });\n                }\n\n                break;\n\n              case \"refund_order_list\":\n                for (var _i17 = 0; _i17 < res.list.length; _i17++) {\n                  xml.push({\n                    orderId: res.list[_i17].orderId,\n                    refundId: res.list[_i17].refundId,\n                    createTime: res.list[_i17].createTime,\n                    paymentTime: res.list[_i17].paymentTime,\n                    refundTime: res.list[_i17].refundTime,\n                    refundMoney: res.list[_i17].refundMoney,\n                    refundType: res.list[_i17].refundType,\n                    refundStatus: res.list[_i17].refundStatus,\n                    orderType: res.list[_i17].orderType\n                  });\n                }\n\n                break;\n\n              case \"statistics_list\":\n                for (var _i18 = 0; _i18 < res.statisticsList.length; _i18++) {\n                  xml.push({\n                    statisticsId: res.statisticsList[_i18].statisticsId,\n                    statisticsTime: res.statisticsList[_i18].statisticsTime,\n                    statisticsDate: res.statisticsList[_i18].statisticsDate,\n                    statisticsMachine: res.statisticsList[_i18].statisticsMachine,\n                    adminName: res.statisticsList[_i18].adminName,\n                    refundMoney: res.statisticsList[_i18].refundMoney,\n                    orderCount: res.statisticsList[_i18].orderCount,\n                    cancelOrderCount: res.statisticsList[_i18].cancelOrderCount,\n                    refundOrderCount: res.statisticsList[_i18].refundOrderCount,\n                    sendCount: res.statisticsList[_i18].sendCount,\n                    refundAmount: res.statisticsList[_i18].refundAmount,\n                    sendUsers: res.statisticsList[_i18].sendUsers,\n                    userCount: res.statisticsList[_i18].userCount,\n                    completeAmount: res.statisticsList[_i18].completeAmount\n                  });\n                }\n\n                break;\n\n              case \"manage_dividend_list\":\n                for (var _i19 = 0; _i19 < res.dList.length; _i19++) {\n                  xml.push({\n                    dId: res.dList[_i19].dId,\n                    orderId: res.dList[_i19].orderId,\n                    recId: res.dList[_i19].recId,\n                    recName: res.dList[_i19].recName,\n                    recType: res.dList[_i19].recType,\n                    recMoney: res.dList[_i19].recMoney,\n                    allMoney: res.dList[_i19].allMoney,\n                    recTime: res.dList[_i19].recTime\n                  });\n                }\n\n                break;\n\n              case \"maintainer_list\":\n                for (var _i20 = 0; _i20 < res.maintainerList.length; _i20++) {\n                  xml.push({\n                    maintainerId: res.maintainerList[_i20].maintainerId,\n                    maintainerName: res.maintainerList[_i20].maintainerName,\n                    maintainerPhone: res.maintainerList[_i20].maintainerPhone,\n                    adminName: res.maintainerList[_i20].adminName,\n                    nickName: res.maintainerList[_i20].nickName,\n                    maintainerStatus: res.maintainerList[_i20].maintainerStatus,\n                    auditStatus: res.maintainerList[_i20].auditStatus,\n                    royaltyRate: res.maintainerList[_i20].royaltyRate,\n                    auditAdminName: res.maintainerList[_i20].auditAdminName\n                  });\n                }\n\n                break;\n\n              case \"material_log_list\":\n                for (var _i21 = 0; _i21 < res.materialLog.length; _i21++) {\n                  xml.push({\n                    materialLogId: res.materialLog[_i21].materialLogId,\n                    machineNumber: res.materialLog[_i21].machineNumber,\n                    adminName: res.materialLog[_i21].adminName,\n                    productId: res.materialLog[_i21].productId,\n                    productName: res.materialLog[_i21].productName,\n                    orderId: res.materialLog[_i21].orderId,\n                    createTime: res.materialLog[_i21].createTime,\n                    materialDeductionList: res.materialLog[_i21].materialDeductionList\n                  });\n                }\n\n                break;\n\n              default:\n                break;\n            }\n\n            it.total = parseInt(res.data.total);\n            it.currentPage = parseInt(res.pageSize); //数据总条数\n\n            it.tableData = xml;\n            it.loading = false;\n          }() : it.IError(res.msg);\n        }\n      });\n    },\n    crud: function crud(arg) {\n      //检查路由\n      window.parent.document.getElementById('tagHref').setAttribute('src', \"../../views/\".concat(arg.uri, \".htm?[hash]\").concat(arg.enitId ? '*' + encodeURI(JSON.stringify(arg.enitId)) : '')); // 编辑带参数\n    },\n    //列表操作\n    //清单列表\n    listoperation: function listoperation(e) {\n      var it = this;\n\n      switch (e._tag) {\n        case 'manage_prodcut_list_list':\n          switch (e._type) {\n            case \"A\":\n              _data['type'] = 6;\n              _data['machineType'] = e._evt.machineType;\n              _data['name'] = e._evt.name;\n              ym.init.XML({\n                method: 'POST',\n                uri: token._j.URLS.Development_Server_ + uri,\n                async: false,\n                xmldata: _data,\n                done: function done(res) {\n                  try {\n                    ym.init.RegCode(token._j.successfull).test(res.statusCode.status) ? function () {\n                      it.ISuccessfull(res.statusCode.msg);\n                      it.list(); //刷新列表\n                    }() : function () {\n                      throw \"收集到错误：\\n\\n\" + res.statusCode.msg;\n                    }();\n                  } catch (error) {\n                    it.IError(error);\n                  }\n                }\n              });\n              break;\n\n            case \"S\":\n              _data['type'] = 2;\n              _data['page'] = 1;\n              _data['listId'] = e._evt.listId;\n              it.listId = e._evt.listId;\n              ym.init.XML({\n                method: 'POST',\n                uri: token._j.URLS.Development_Server_ + uri,\n                async: false,\n                xmldata: _data,\n                done: function done(res) {\n                  try {\n                    it.TableFormData = [];\n                    ym.init.RegCode(token._j.successfull).test(res.statusCode.status) ? function () {\n                      res.productShowList.forEach(function (element) {\n                        it.TableFormData.push({\n                          productId: element.productId,\n                          productName: element.productName,\n                          productPrice: element.productPrice,\n                          formulaName: element.formulaName,\n                          bunkerNumber: element.bunkerNumber,\n                          createTime: element.createTime,\n                          productRank: element.productRank,\n                          machineType: element.machineType\n                        });\n                      });\n                    }() : function () {\n                      throw \"收集到错误：\\n\\n\" + res.statusCode.msg;\n                    }();\n                  } catch (error) {\n                    it.IError(error);\n                  }\n                }\n              });\n              break;\n\n            case \"E\":\n              _data['type'] = 3;\n              _data['listId'] = it.listId;\n              ym.init.XML({\n                method: 'POST',\n                uri: token._j.URLS.Development_Server_ + uri,\n                async: false,\n                xmldata: _data,\n                done: function done(res) {\n                  try {\n                    it.UpdateTableFormData = [];\n                    ym.init.RegCode(token._j.successfull).test(res.statusCode.status) ? function () {\n                      res.productInfoList.forEach(function (element, index) {\n                        it.UpdateTableFormData.push({\n                          productId: element.productId,\n                          productName: element.productName,\n                          productPrice: element.productPrice,\n                          productPicurl: element.productPicurl,\n                          formulaName: element.formulaName,\n                          bunkerNumber: element.bunkerNumber,\n                          createTime: element.createTime,\n                          productRank: element.productRank,\n                          machineType: element.machineType != 1 ? \"小型桌面机\" : \"大型柜式机\",\n                          productComment: element.productComment\n                        });\n\n                        if (res.productIdList) {\n                          console.log(res.productIdList != '');\n                          res.productIdList.forEach(function (e) {\n                            if (e == element.productId) {\n                              it.$nextTick(function () {\n                                it.tableChecked(index); //每次更新了数据，触发这个函数即可。\n                              });\n                            }\n                          });\n                        }\n\n                        ;\n                      });\n                    }() : function () {\n                      throw \"收集到错误：\\n\\n\" + res.statusCode.msg;\n                    }();\n                  } catch (error) {\n                    it.IError(error);\n                  }\n                }\n              });\n              break;\n\n            case \"P\":\n              _data['type'] = 4;\n              _data['listId'] = it.listId;\n              _data['productId'] = it.productId;\n              ym.init.XML({\n                method: 'POST',\n                uri: token._j.URLS.Development_Server_ + uri,\n                async: false,\n                xmldata: _data,\n                done: function done(res) {\n                  try {\n                    it.UpdateTableFormData = [];\n                    ym.init.RegCode(token._j.successfull).test(res.statusCode.status) ? function () {\n                      it.ISuccessfull(res.statusCode.msg);\n                      it.listoperation({\n                        _tag: 'manage_prodcut_list_list',\n                        _evt: it.listId,\n                        _type: 'S'\n                      }); //刷新列表\n                    }() : function () {\n                      throw \"收集到错误：\\n\\n\" + res.statusCode.msg;\n                    }();\n                  } catch (error) {\n                    it.IError(error);\n                  }\n                }\n              });\n              break;\n\n            default:\n              break;\n          }\n\n          break;\n\n        default:\n          break;\n      }\n    },\n    handleSelectionChange: function handleSelectionChange(val) {\n      var _this3 = this;\n\n      this.multipleSelection = val;\n      this.productCount = val.length;\n      this.productId = [];\n      this.ids = [];\n      val.forEach(function (e) {\n        _this3.productId.push(e.productId);\n\n        _this3.ids.push(e.id);\n      });\n    },\n    filterTag: function filterTag(value, row) {\n      return row.machineType === value;\n    },\n    tableChecked: function tableChecked(e) {\n      this.$refs.multipleTable.toggleRowSelection(this.UpdateTableFormData[e], true);\n    },\n    Idelete: function Idelete(e) {\n      //删除\n      var it = this;\n      _data['ids'] = [e._id];\n      ym.init.XML({\n        method: 'POST',\n        uri: token._j.URLS.Development_Server_ + e.uri,\n        async: false,\n        xmldata: _data,\n        done: function done(res) {\n          try {\n            ym.init.RegCode(token._j.successfull).test(res.state) ? function () {\n              it.ISuccessfull(res.msg);\n              it.list();\n            }() : function () {\n              throw \"收集到错误：\\n\\n\" + res.msg;\n            }();\n          } catch (error) {\n            it.IError(error);\n          }\n        }\n      });\n    },\n    batchOperation: function batchOperation(e) {\n      //批量操作\n      var it = this;\n\n      switch (e.type) {\n        case 'list':\n          ym.init.XML({\n            method: 'POST',\n            uri: token._j.URLS.Development_Server_ + uri,\n            async: false,\n            xmldata: _data,\n            done: function done(res) {\n              try {\n                ym.init.RegCode(token._j.successfull).test(res.state) ? function () {\n                  var _xml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n                  res.data.list.forEach(function (e, index) {\n                    _xml.push({\n                      id: e.id,\n                      adminName: e.adminName,\n                      phone: e.phone,\n                      realName: e.realName,\n                      weChatId: e.weChatId == -1 ? \"无\" : e.weChatId,\n                      headImgPic: e.headImgPic == -1 ? '无' : e.headImgPic,\n                      nickName: e.nickName == -1 ? \"无\" : e.nickName,\n                      parentId: e.parentId == -1 ? \"无\" : e.parentId,\n                      parentAdminName: e.parentAdminName == -1 ? \"无\" : e.parentAdminName,\n                      parentRealName: e.parentRealName == -1 ? \"无\" : e.parentRealName,\n                      isService: e.isService,\n                      status: e.status\n                    });\n                  });\n                  it.UpdateTableFormData = _xml;\n                }() : function () {\n                  throw \"收集到错误：\\n\\n\" + res.msg;\n                }();\n              } catch (error) {\n                it.IError(error);\n              }\n            }\n          });\n          break;\n\n        default:\n          //批量修改\n          e._suc == \"ZC\" ? _data['type'] = 1 : _data['type'] = 0;\n          _data['ids'] = it.ids;\n          ym.init.XML({\n            method: 'POST',\n            uri: token._j.URLS.Development_Server_ + 'change_admin_status',\n            async: false,\n            xmldata: _data,\n            done: function done(res) {\n              try {\n                ym.init.RegCode(token._j.successfull).test(res.state) ? function () {\n                  it.ISuccessfull(res.msg);\n                  it.list();\n                  it.UpdateTableAndVisible = false;\n                }() : function () {\n                  throw \"收集到错误：\\n\\n\" + res.msg;\n                }();\n              } catch (error) {\n                it.IError(error);\n              }\n            }\n          });\n          break;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/public/javascripts/list.js?");

/***/ })

/******/ });