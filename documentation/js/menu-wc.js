'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">amc.integration-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AmcModule.html" data-type="entity-link" >AmcModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' : 'data-bs-target="#xs-controllers-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' :
                                            'id="xs-controllers-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' }>
                                            <li class="link">
                                                <a href="controllers/AdsAuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsAuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AutomatedController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutomatedController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ExecutionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExecutionsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WorkflowsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' : 'data-bs-target="#xs-injectables-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' :
                                        'id="xs-injectables-links-module-AmcModule-317d76fc6818c7abe6af7dfe2522a60245bfdd056efca60df0dfe2e53a2808972e1fd86d52a73d28f084904b88225de5a92b8a38cc66cd02d5d9c105b4325f70"' }>
                                        <li class="link">
                                            <a href="injectables/AdsAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AutomatedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutomatedService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExecutionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExecutionsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WorkflowsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' :
                                            'id="xs-controllers-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' :
                                        'id="xs-injectables-links-module-AppModule-8128ef6d08616d085dacb690c5ae266625c9bf6a00ab897838a40b4ae2d9acc3b2e519c9ea8c541582a43d10345b41a43bbccd8c6513f51ac1d275a3c5667773"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' :
                                            'id="xs-controllers-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' :
                                        'id="xs-injectables-links-module-AuthModule-b914126370c0cbf55cfbe090c07adfbfac781c35235cfa2b7d2f8d59d2e3e10c39b0c6e1b36531802d4e6680e87d06091f4f65f5284ef691202d051659eea3e0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AwsModule.html" data-type="entity-link" >AwsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AwsModule-a25b367c6f49e59cb6725dc0bb6c54db7d4133e8bcf600fb1d865cb01f988b2e56dcb6e4065adb932f3d32defb13a354a575004ab035a6d37701025067b1ac5c"' : 'data-bs-target="#xs-injectables-links-module-AwsModule-a25b367c6f49e59cb6725dc0bb6c54db7d4133e8bcf600fb1d865cb01f988b2e56dcb6e4065adb932f3d32defb13a354a575004ab035a6d37701025067b1ac5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AwsModule-a25b367c6f49e59cb6725dc0bb6c54db7d4133e8bcf600fb1d865cb01f988b2e56dcb6e4065adb932f3d32defb13a354a575004ab035a6d37701025067b1ac5c"' :
                                        'id="xs-injectables-links-module-AwsModule-a25b367c6f49e59cb6725dc0bb6c54db7d4133e8bcf600fb1d865cb01f988b2e56dcb6e4065adb932f3d32defb13a354a575004ab035a6d37701025067b1ac5c"' }>
                                        <li class="link">
                                            <a href="injectables/S3Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >S3Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AxiosModule.html" data-type="entity-link" >AxiosModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AxiosModule-18f4e43ae996eb6072eecea4b8b344999ebcfa12a01e85b8cef4e09e00567eeeccf1184380030a8924cb53595e361a2438612a4ed53f47cb36667ce5d5af5d22"' : 'data-bs-target="#xs-injectables-links-module-AxiosModule-18f4e43ae996eb6072eecea4b8b344999ebcfa12a01e85b8cef4e09e00567eeeccf1184380030a8924cb53595e361a2438612a4ed53f47cb36667ce5d5af5d22"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AxiosModule-18f4e43ae996eb6072eecea4b8b344999ebcfa12a01e85b8cef4e09e00567eeeccf1184380030a8924cb53595e361a2438612a4ed53f47cb36667ce5d5af5d22"' :
                                        'id="xs-injectables-links-module-AxiosModule-18f4e43ae996eb6072eecea4b8b344999ebcfa12a01e85b8cef4e09e00567eeeccf1184380030a8924cb53595e361a2438612a4ed53f47cb36667ce5d5af5d22"' }>
                                        <li class="link">
                                            <a href="injectables/AxiosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AxiosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportsModule.html" data-type="entity-link" >ReportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' : 'data-bs-target="#xs-controllers-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' :
                                            'id="xs-controllers-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' }>
                                            <li class="link">
                                                <a href="controllers/ReportsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' : 'data-bs-target="#xs-injectables-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' :
                                        'id="xs-injectables-links-module-ReportsModule-71efe261a4572d0b38cd5b7f8c1bb8b74ad10991332ddbe8308f2be16a391849683f812a5ab408174a8ce2b3a9783eac2e3254e0e31e5d1c0bb5b2caaa2e5c30"' }>
                                        <li class="link">
                                            <a href="injectables/ReportsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CheckAutomatedParamsDto.html" data-type="entity-link" >CheckAutomatedParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckWorkflowIdDto.html" data-type="entity-link" >CheckWorkflowIdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkflowDto.html" data-type="entity-link" >CreateWorkflowDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkflowExecutionDto.html" data-type="entity-link" >CreateWorkflowExecutionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateTokenDto.html" data-type="entity-link" >GenerateTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/getLatestReportParamsDto.html" data-type="entity-link" >getLatestReportParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/getLatestReportQueriesDto.html" data-type="entity-link" >getLatestReportQueriesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/getReportDto.html" data-type="entity-link" >getReportDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpCacheInterceptor.html" data-type="entity-link" >HttpCacheInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokenInterceptor.html" data-type="entity-link" >RefreshTokenInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenMiddleware.html" data-type="entity-link" >TokenMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CustomRequest.html" data-type="entity-link" >CustomRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAdsAuthResponse.html" data-type="entity-link" >IAdsAuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAdsConfig.html" data-type="entity-link" >IAdsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAwsConfig.html" data-type="entity-link" >IAwsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExecutionParams.html" data-type="entity-link" >IExecutionParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExecutionResponse.html" data-type="entity-link" >IExecutionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReportMetadata.html" data-type="entity-link" >IReportMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IS3Item.html" data-type="entity-link" >IS3Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Itoken.html" data-type="entity-link" >Itoken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWorkflowResponse.html" data-type="entity-link" >IWorkflowResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IYearMapItem.html" data-type="entity-link" >IYearMapItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});