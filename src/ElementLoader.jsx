import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { Util } from './core/parsers/commands/iic/util';
import { CircularProgress } from '@mui/material';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Navbar2Wrapper from './components/navbar-2/navbar-2-wrapper';
import HeroElementWrapper from './components/hero-element/hero-element-wrapper';
import SpacerElementWrapper from './components/spacer-element/spacer-element-wrapper';
import sectionTitleWrapper from './components/section-title/section-title-wrapper';
import descriptionBoxWrapper from './components/description-box/description-box-wrapper';
import InfoCTAWrapper from './components/info-cta/info-cta-wrapper';
import FooterElement2Wrapper from './components/footer-element-2/footer-element-2-wrapper';
import HeroElement7Wrapper from './components/hero-element-7/hero-element-7-wrapper';
import AboutSectionWrapper from './components/about-section/about-section-wrapper';
import AccountDetailsElementWrapper from './components/account-details/account-details-wrapper';
import addProductService from './components/add-product-service/add-product-service-wrapper';
import addRolesWrapper from './components/add-roles/add-roles-wrapper';
import adsCarouselWrapper from './components/ads-carousel/ads-carousel-wrapper';
import AppointmentElementWrapper from './components/appointment-element/appointment-element-wrapper';
import assignStaffRolesWrapper from './components/assign-staff-roles/assign-staff-roles-wrapper';
import BankInstructionsWrapper from './components/bank-instructions/bank-instructions-wrapper';
import barChartWrapper from './components/bar-chart/bar-chart-wrapper';
import AddBasicWrapper from './components/ads-basic/ads-basic-wrapper';
import AccountSummaryWraper from './components/account-summary/account-summary-wrapper';
import AdsElementWrapper from './components/ads-element/ads-element-wrapper';
import barcodeScannerWrapper from './components/barcode-scanner/barcode-scanner-wrapper';
import blobCarouselWrapper from './components/blob-carousel/blob-carousel-wrapper';
import BlobElementWrapper from './components/blob-element/blob-element-wrapper';
import BulkUploadWrapper from './components/bulk-upload/bulk-upload-wrapper';
import businessIndustrySelectorWrapper from './components/business-industry-selector/business-industry-selector-wrapper';
import CalendarELementWrapper from './components/calendar-element/calendar-element-wrapper';
import CardPaymentStatusWrapper from './components/card-payment-status/card-payment-wrapper';
import cartEditorWrapper from './components/cart-editor/cart-editor-wrapper';
import categoriesGridWrapper from './components/categories-grid/categories-grid-wrapper';
import CategoriesInputWrapper from './components/category-input/category-input-wrapper';
import CccExpirationWrapper from './components/cc-expiration/cc-expiration-wrapper';
import CCInputWrapper from './components/cc-input/cc-input-wrapper';
import CheckboxCheckWrapper from './components/checkbox-check/checkbox-check-wrapper';
import CheckboxInputWrapper from './components/checkbox-input/checkbox-input-wrapper';
import CheckOutSummaryWrapper from './components/checkout-summary-element/checkout-summary-element-wrapper';
import ChosenPriceWrapper from './components/chosen-price/chosen-price-wrapper';
import ClientCounterWrapper from './components/client-counter/client-counter-wrapper';
import clientElementWrapper from './components/client-element/client-element-wrapper';
import CodeInputWrapper from './components/code-input/code-input-wrapper';
import ColorInputWrapper from './components/color-input/color-input-wrapper';
import CommentBoxWrapper from './components/comment-box/comment-box-wrapper';
import completedOrdersListWrapper from './components/completed-orders-list/completed-orders-list-wrapper';
import ConfirmDialogWrapper from './components/confirm-dialog/confirm-dialog-wrapper';
import CountdownElementWrapper from './components/countdown-element/countdown-element-wrapper';
import CVCInputWrapper from './components/cvc-input/cvc-input-wrapper';
import datalistElementWrapper from './components/datalist-element/datalist-element-wrapper';
import DateInputWrapper from './components/date/date-wrapper';
import DaysHoursSelectorWrapper from './components/days-hours-selector/days-hours-selector-wrapper';
import dealCountdownWrapper from './components/deal-countdown/deal-countdown-wrapper';
import deliveryCheckboxWrapper from './components/delivery-checkbox/delivery-checkbox-wrapper';
import DescriptionBoxWrapper2 from './components/description-box-2/description-box-2-wrapper';
import discountHeroWrapper from './components/discount-hero/discount-hero-wrapper';
import discountHero2Wrapper from './components/discount-hero-2/discount-hero-2-wrapper';
import discountedProductsWrapper from './components/discounted-products/discounted-products-wrapper';
import discountsGridWrapper from './components/discounts-grid/discounts-grid-wrapper';
import DownloadButtonWrapper from './components/download-button/download-button-wrapper';
import dropdownDetailsWrapper from './components/dropdown-details/dropdown-details-wrapper';
import dropdownSelectWrapper from './components/dropdown-select/dropdown-select-wrapper';
import DividerElementWrapper from './components/divider-element/divider-element-wrapper';
import EmailInputWrapper from './components/email-input/email-input-wrapper';
import EmailSummaryWrapper from './components/email-summary/email-summary-wrapper';
import EmptyViewWrapper from './components/empty-view/empty-view-wrapper';
import eventsListWrapper from './components/events-list/events-list-wrapper';
import faqElementWrapper from './components/faq-element/faq-element-wrapper';
import FileInputWrapper from './components/file-input/file-input-wrapper';
import FingerPrintElementWrapper from './components/fingerprint-element/fingerprint-element-wrapper';
import FlexiRadioButton from './components/flexi-radio-buttons/flexi-radio-buttons-wrapper';
import floatSummaryWrapper from './components/float-summary/float-summary-wrapper';
import FloatingThemeToggleWrapper from './components/floating-theme-toggle/floating-theme-toggle-wrapper';
import FooterElement from './components/footer-element/footer-element-wrapper';
import GeoMapElementWrapper from './components/geo-map/geo-map-wrapper';
import GeoSearchWrapper from './components/geo-search/geo-search-wrapper';
import groupedBarChartWrapper from './components/grouped-bar-chart/grouped-bar-chart-wrapper';
import groupedSelectWrapper from './components/grouped-select/grouped-select-wrapper';
import HandsCraftsHeroWrapper from './components/handcrafts-hero/handcrafts-hero-wrapper';
import HeroBannerWrapper from './components/hero-banner/hero-baner-wrapper';
import heroElementWrapper from './components/hero-element/hero-element-wrapper';
import HeroElement2Wrapper from './components/hero-element-2/hero-element-2-wrapper';
import HeroElement3Wrapper from './components/hero-element-3/hero-element-3-wrapper';
import HeroElement4Wrapper from './components/hero-element-4/hero-element-4-wrapper';
import HeroElement5Wrapper from './components/hero-element-5/hero-element-5-wrapper';
import HeroElement6Wrapper from './components/hero-element-6/hero-element-6-wrapper';
import HeroElement8Wrapper from './components/hero-element-8/hero-element-8-wrapper';
import HeroElement9Wrapper from './components/hero-element-9/hero-element-9-wrapper';
import HeroElement10Wrapper from './components/hero-element-10/hero-element-10-wrapper';
import heroElement11Wrapper from './components/hero-element-11/hero-element-11-wrapper';
import HeroElement12Wrapper from './components/hero-element-12/hero-element-12-wrapper';
import HeroElement13Wrapper from './components/hero-element-13/hero-element-13-wrapper';
import HeroElement14Wrapper from './components/hero-element-14/hero-element-14-wrapper';
import HeaderViewWrapper from './components/header-view/header-view-wrapper';
import HiddenElementWrapper from './components/hidden/hidden-wrapper';
import horizontalListWrapper from './components/horizontal-list/horizontal-list-wrapper';
import HyperLinkWrapper from './components/hyperlink/hyperlink-wrapper';
import HyperLinkWrapper2 from './components/hyperlink-element-2/hyperlink-element-2-wrapper';
import IconsDisplayWrapper from './components/icons-display/icons-display-wrapper';
import IFrameElement from './components/iframe-element/iframe-element-wrapper';
import ImageElementWrapper from './components/image-element/image-element-wrapper';
import ImageInputWrapper from './components/image-input/image-input-wrapper';
import imagesCarouselWrapper from './components/images-carousel/images-carousel-wrapper';
import industriesCategoriesWrapper from './components/industries-categories/industries-categories-wrapper';
import InfoCTA2Wrapper from './components/info-cta-2/info-cta-2-wrapper';
import InfoCTA3Wrapper from './components/info-cta-3/info-cta-3-wrapper';
import insightPanel1Wrapper from './components/insight-panel-1/insight-panel-1-wrapper';
import insightPanel2Wrapper from './components/insight-panel-2/insight-panel-2-wrapper';
import insightPanel3Wrapper from './components/insight-panel-3/insight-panel-3-wrapper';
import InvoiceElement from './components/invoice-element/invoice-element-wrapper';
import JumboTron1Wrapper from './components/jumbotron-1/jumbotron-1-wrapper';
import lineChartWrapper from './components/line-chart/line-chart-wrapper';
import lineChart2Wrapper from './components/line-chart-2/line-chart-2-wrapper';
import listElementWrapper from './components/list-element/list-element-wrapper';
import listElement2Wrapper from './components/list-element-2/list-element-2-wrapper';
import listElement3Wrapper from './components/list-element-3/list-element-3-wrapper';
import listElement4Wrapper from './components/list-element-4/list-element-4-wrapper';
import listElement5Wrapper from './components/list-element-5/list-element-5-wrapper';
import LiveChatWrapper from './components/live-chat/live-chat-wrapper';
import liveChat2Wrapper from './components/live-chat-2/live-chat-2-wrapper';
import locationPickerWrapper from './components/location-picker/location-picker-wrapper';
import loginFacebookWrapper from './components/login-facebook/login-facebook-wrapper';
import loginGoogleWrapper from './components/login-google/login-google-wrapper';
import loginMipayWrapper from './components/login-mipay/login-mipay-wrapper';
import manualSlideshowWrapper from './components/manual-slideshow/manual-slideshow-wrapper';
import MarkupElementWrapper from './components/markup-element/markup-element-wrapper';
import menuServiceButtonWrapper from './components/menu-service-button/menu-service-button-wrapper';
import messageSummaryWrapper from './components/message-summary/message-summary-wrapper';
import messagesListWrapper from './components/messages-list/messages-list-wrapper';
import monthRangePickerWrapper from './components/month-range-picker/month-range-picker-wrapper';
import monthYearMipayWrapper from './components/month-year/month-year-wrapper';
import MsisdnInputWrapper from './components/msisdn-input/msisdn-input-wrapper';
import MulitLineChartWrapper from './components/multiline-chart/multiline-chart-wrapper';
import navbar2Wrapper from './components/navbar-2/navbar-2-wrapper';
import navbar3Wrapper from './components/navbar-3/navbar-3-wrapper';
import navbar4Wrapper from './components/navbar-4/navbar-4-wrapper';
import navbar5Wrapper from './components/navbar-5/navbar-5-wrapper';
import navbar6Wrapper from './components/navbar-6/navbar-6-wrapper';
import navbar7Wrapper from './components/navbar-7/navbar-7-wrapper';
import navbar8Wrapper from './components/navbar-8/navbar-8-wrapper';
import navbar9Wrapper from './components/navbar-9/navbar-9-wrapper';
import navbar10Wrapper from './components/navbar-10/navbar-10-wrapper';
import navbar11Wrapper from './components/navbar-11/navbar-11-wrapper';
import navbar12Wrapper from './components/navbar-12/navbar-12-wrapper';
import navbar13Wrapper from './components/navbar-13/navbar-13-wrapper';
import navbar14Wrapper from './components/navbar-14/navbar-14-wrapper';
import navbar15Wrapper from './components/navbar-15/navbar-15-wrapper';
import navbarDefaultWrapper from './components/navbar-default/navbar-default-wrapper';
import nenasasaResellerUserManualWrapper from './components/nenasasa-reseller-user-manual/nenasasa-reseller-user-manual-wrapper';
import newCustomerWrapper from './components/new-customer/new-customer-wrapper';
import newItemWrapper from './components/new-item/new-item-wrapper';
import nextClientWrapper from './components/next-client/next-client-wrapper';
import notificationButtonWrapper from './components/notification-button/notification-button-wrapper';
import notificationPanelWrapper from './components/notification-panel/notification-panel-wrapper';
import NumberInputWrapper from './components/number-input/number-input-wrapper';
import NumberPickerWrapper from './components/number-picker/number-picker-wrapper';
import orderDetailsWrapper from './components/order-details/order-details-wrapper';
import orderSummaryWrapper from './components/order-summary/order-summary-wrapper';
import orderTimelineWrapper from './components/order-timeline/order-timeline-wrapper';
import OverViewELementWrapper from './components/overview-element/overview-element-wrapper';
import passwordInputWrapper from './components/password-input/password-input-wrapper';
import paymentMethodSelectWrapper from './components/payment-method-select/payment-method-select-wrapper';
import paymentMethodSummaryWrapper from './components/payment-method-summary/payment-method-summary-wrapper';
import paymentOptionsWrapper from './components/payment-options/payment-options-wrapper';
import paymentSelectorWrapper from './components/payment-selector/payment-selector-wrapper';
import paymentStatusWrapper from './components/payment-status/payment-status-wrapper';
import paymentsPageBarWrapper from './components/payments-page-bar/payments-page-bar-wrapper';
import paymentsSetupWrapper from './components/payments-setup/payments-setup-wrapper';
import pieChartWrapper from './components/pie-chart/pie-chart-wrapper';
import PinInputWrapper from './components/pin-input/pin-input-wrapper';
import PinPadInputWrapper from './components/pinpad-input/pinpad-input-wrapper';
import priceCardsWrapper from './components/price-cards/price-cards-wrapper';
import priceCards2Wrapper from './components/price-cards-2/price-cards-2-wrapper';
import priceSelectWrapper from './components/price-select/price-select-wrapper';
import priceTableWrapper from './components/price-table/price-table-wrapper';
import PrintButtonWrapper from './components/print-button/print-button-wrapper';
import productImageUploadWrapper from './components/product-image-upload/product-image-upload-wrapper';
import productListWrapper from './components/product-list/product-list-wrapper';
import productMetaViewWrapper from './components/product-meta-view/product-meta-view-wrapper';
import productOptionsWrapper from './components/product-options/product-options-wrapper';
import productPriceComparisonWrapper from './components/product-price-comparison/product-price-comparison-wrapper';
import ProductVariantWrapper from './components/product-variant/product-variant-wrapper';
import productViewWrapper from './components/product-view/product-view-wrapper';
import productsCarouselWrapper from './components/products-carousel/products-carousel-wrapper';
import productsElementWrapper from './components/products-element/products-element-wrapper';
import productsExpiryWrapper from './components/products-expiry/products-expiry-wrapper';
import productsGrid2Wrapper from './components/products-grid-2/products-grid-2-wrapper';
import purchaseOrderEditorWrapper from './components/purchase-order-editor/purchase-order-editor-wrapper';
import quickLinksWrapper from './components/quick-links/quick-links-wrapper';
import quickOverviewWrapper from './components/quick-overview/quick-overview-wrapper';
import quoteElementWrapper from './components/quote-element/quote-element-wrapper';
import radioButtonCardWrapper from './components/radio-button-card/radio-button-card-wrapper';
import radioGroupWrapper from './components/radio-group/radio-group-wrapper';
import ratingScaleWrapper from './components/rating-scale/rating-scale-wrapper';
import RecaptchaElementWrapper from './components/recaptcha-element/recaptcha-element-wrapper';
import receiptElementWrapper from './components/receipt-element/receipt-element-wrapper';
import ReceiveSyncWrapper from './components/receive-sync/receive-sync-wrapper';
import redirectElementWrapper from './components/redirect-element/redirect-element-wrapper';
import RichTextEditorWrapper from './components/rich-text-editor/rich-text-editor-wrapper';
import ScrollToTop from './components/scroll-to-top/scroll-to-top-wrapper';
import SearchInputWrapper from './components/search-input/search-input-wrapper';
import section1Wrapper from './components/section-1/section-1-wrapper';
import section11Wrapper from './components/section-11/section-11-wrapper';
import sectionElementWrapper from './components/section-element/section-element-wrapper';
import sectionFrontWrapper from './components/section-front/section-front-wrapper';
import sectionFront2Wrapper from './components/section-front-2/section-front-2-wrapper';
import SectionTitleWrapper from './components/select-element/select-element-wrapper';
import SelectElementWrapper from './components/select-element/select-element-wrapper';
import serviceAttendantSelectorWrapper from './components/service-attendant-selector/service-attendant-selector-wrapper';
import ServiceButtonWrapper from './components/service-button/service-button-wrapper';
import serviceDescriptionWrapper from './components/service-description/service-description-wrapper';
import serviceSelectWrapper from './components/service-select/service-select-wrapper';
import serviceTitleWrapper from './components/service-title/service-title-wrapper';
import servicesCarouselWrapper from './components/services-carousel/services-carousel-wrapper';
import SettingsElementWrapper from './components/settings-element/settings-element-wrapper';
import shareButtonWrapper from './components/share-button/share-button-wrapper';
import ShareLinkWrapper from './components/share-link/share-link-wrapper';
import ShareLocationWrapper from './components/share-location/share-location-wrapper';
import shoppingCartBtnWrapper from './components/shopping-cart-btn/shopping-cart-btn-wrapper';
import skipButtonWrapper from './components/skip-button/skip-button-wrapper';
import smsFloatPurchaseWrapper from './components/sms-float-purchase/sms-float-purchase-wrapper';
import socialMediaPointsWrapper from './components/social-media-points/social-media-points-wrapper';
import specializationSelectorWrapper from './components/specialization-selector/specialization-selector-wrapper';
import SplitButton from './components/split-button/split-button-wrapper';
import splitDetailsWrapper from './components/split-details/split-details-wrapper';
import stackedBarWrapper from './components/stacked-bar/stacked-bar-wrapper';
import staffInfoWrapper from './components/staff-info/staff-info-wrapper';
import staticDropdownSelectWrapper from './components/static-dropdown-select/static-dropdown-select-wrapper';
import StaticShoppingCartWrapper from './components/static-shopping-cart/static-shopping-cart-wrapper';
import statsElementWrapper from './components/stats-element/stats-element-wrapper';
import statsElement2Wrapper from './components/stats-element-2/stats-element-2-wrapper';
import StepsProgressWrapper from './components/steps-progress/steps-progress-wrapper';
import stepsProgress2Wrapper from './components/steps-progress-2/steps-progress-2-wrapper';
import stepsTimelineWrapper from './components/steps-timeline/steps-timeline-wrapper';
import storeSummaryWrapper from './components/store-summary/store-summary-wrapper';
import subdomainInputWrapper from './components/subdomain-input/subdomain-input-wrapper';
import SubmitElementWrapper from './components/submit/submit-wrapper';
import summaryBoxesWrapper from './components/summary-boxes/summary-boxes-wrapper';
import summaryCardWrapper from './components/summary-card/summary-card-wrapper';
import summaryChartWrapper from './components/summary-chart/summary-chart-wrapper';
import summaryReturnsWrapper from './components/summary-returns/summary-returns-wrapper';
import SummaryTabWrapper from './components/summary-tab/summary-tab-wrapper';
import summaryTabsWrapper from './components/summary-tabs/summary-tabs-wrapper';
import tagInputWrapper from './components/tag-input/tag-input-wrapper';
import TelephoneInputWrapper from './components/telephone-input/telephone-input-wrapper';
import templateSelectorWrapper from './components/template-selector/template-selector-wrapper';
import TermsConditionWrapper from './components/terms-conditions/terms-conditions-wrapper';
import TextAreaWrapper from './components/text-area/text-area-wrapper';
import TextInputWrapper from './components/text-input/text-input-wrapper';
import TextViewWrapper from './components/text-view/text-view-wrapper';
import TileElementWrapper from './components/tile-element/tile-element-wrapper';
import TileElementWrapper2 from './components/tile-element-2/tile-element-2-wrapper';
import TileElementWrapper3 from './components/tile-element-3/tile-element-3-wrapper';
import TileElementWrapper4 from './components/tile-element-4/tile-element-4-wrapper';
import TileElementWrapper5 from './components/tile-element-5/tile-element-5-wrapper';
import TileElementWrapper6 from './components/tile-element-6/tile-element-6-wrapper';
import TileElementWrapper7 from './components/tile-element-7/tile-element-7-wrapper';
import TileElementWrapper8 from './components/tile-element-8/tile-element-8-wrapper';
import TimeWrapper from './components/time/time-wrapper';
import TimeELementWrapper from './components/time-element/time-element-wrapper';
import timeSlotPickerWrapper from './components/time-slot-picker/time-slot-picker-wrapper';
import ToggleInputWrapper from './components/toggle-input/toggle-input-wrapper';
import topSellingItemsWrapper from './components/top-selling-items/top-selling-items-wrapper';
import topSellingProductsWrapper from './components/top-selling-products/top-selling-products-wrapper';
import UpcomingAppointmentsWrapper from './components/upcoming-appointments/upcoming-appointments-wrapper';
import userInfoWrapper from './components/user-info/user-info-wrapper';
import VendorBadgesWrapper from './components/vendor-badges/vendor-badges-wrapper';
import VerticalServiceButtonWrapper from './components/vertical-service-button/vertical-service-button-wrapper';
import WavyHeroElementWrapper from './components/wavey-hero/wavey-hero-wrapper';
import weekAnalysisWrapper from './components/week-analysis/week-analysis-wrapper';
import WishListWrapper from './components/wish-list-editor/wish-list-editor-wrapper';
import WishListButtonWrapper from './components/wishlist-button/wishlist-button-wrapper';
import YoutubeEmbedElementWrapper from './components/youtube-embed-element/youtube-embed-element-wrapper';

const componentPathMap = {
  'ABOUT SECTION':AboutSectionWrapper,
  'ACCOUNT DETAILS':AccountDetailsElementWrapper,
  'ACCOUNT SUMMARY':AccountSummaryWraper,
  'ADD PRODUCT SERVICE':addProductService,
  'ADD ROLES':addRolesWrapper,
  'ADS BASIC':AddBasicWrapper,
  'ADS CAROUSEL':adsCarouselWrapper,
  'ADS ELEMENT':AdsElementWrapper,
  'APPOINTMENT ELEMENT':AppointmentElementWrapper,
  'ASSIGN STAFF ROLES':assignStaffRolesWrapper,
  'BANK INSTRUCTIONS':BankInstructionsWrapper,
  'BAR CHART':barChartWrapper,
  'BARCODE SCANNER':barcodeScannerWrapper,
  'BLOB CAROUSEL':blobCarouselWrapper,
  'BLOB ELEMENT':BlobElementWrapper,
  'BULK UPLOAD':BulkUploadWrapper,
  'BUSINESS INDUSTRY SELECTOR':businessIndustrySelectorWrapper,
  'CALENDAR ELEMENT':CalendarELementWrapper,
  'CARD PAYMENT STATUS': CardPaymentStatusWrapper,
  'CART EDITOR':cartEditorWrapper,
  'CATEGORIES GRID':categoriesGridWrapper,
  'CATEGORY INPUT':CategoriesInputWrapper,
  'CC EXPIRATION':CccExpirationWrapper,
  'CC INPUT':CCInputWrapper,
  'CHECKBOX CHECK':CheckboxCheckWrapper,
  'CHECKBOX INPUT':CheckboxInputWrapper,
  'CHECKOUT SUMMARY ELEMENT':CheckOutSummaryWrapper,
  'CHOSEN PRICE':ChosenPriceWrapper,
  'CLIENT COUNTER':ClientCounterWrapper,
  'CLIENT ELEMENT':clientElementWrapper,
  'COLOR INPUT':ColorInputWrapper,
  'COMMENT BOX':CommentBoxWrapper,
  'COMPLETED ORDERS LIST':completedOrdersListWrapper,
  'CONFIRM DIALOG':ConfirmDialogWrapper,
  'COUNTDOWN ELEMENT':CountdownElementWrapper,
  'CVC INPUT':CVCInputWrapper,
  'DATALIST ELEMENT':datalistElementWrapper,
  'DATE':DateInputWrapper,
  'DAYS HOURS SELECTOR':DaysHoursSelectorWrapper,
  'DEAL COUNTDOWN':dealCountdownWrapper,
  'DELIVERY CHECKBOX':deliveryCheckboxWrapper,
  'DESCRIPTION BOX':descriptionBoxWrapper,
  'DISCOUNT HERO':discountHeroWrapper,
  'DISCOUNT HERO 2':discountHero2Wrapper,
  'DISCOUNTED PRODUCTS':discountedProductsWrapper,
  'DISCOUNTS GRID':discountsGridWrapper,
  'DIVIDER ELEMENT':DividerElementWrapper,
  'DOWNLOAD BUTTON':DownloadButtonWrapper,
  'DROPDOWN DETAILS':dropdownDetailsWrapper,
  'DROPDOWN SELECT':dropdownSelectWrapper,
  'EMAIL INPUT':EmailInputWrapper,
  'EMAIL SUMMARY':EmailSummaryWrapper,
  'EMPTY VIEW':EmptyViewWrapper,
  'EVENTS LIST':eventsListWrapper,
  'FAQ ELEMENT':faqElementWrapper,
  'FILE INPUT':FileInputWrapper,
  'FINGERPRINT ELEMENT':FingerPrintElementWrapper,
  'FLEXI RADIO BUTTONS':FlexiRadioButton,
  'FLOAT SUMMARY':floatSummaryWrapper,
  'FLOATING THEME TOGGLE':FloatingThemeToggleWrapper,
  'FOOTER ELEMENT': FooterElement,
  'FOOTER ELEMENT 2': FooterElement2Wrapper,
  'GEO MAP': GeoMapElementWrapper,
  'GEO SEARCH': GeoSearchWrapper,
  'GROUPED BAR CHART': groupedBarChartWrapper,
  'GROUPED SELECT': groupedSelectWrapper,
  'HANDCRAFT HERO': HandsCraftsHeroWrapper,
  'GROUPED BAR CHART': HandsCraftsHeroWrapper,
  'HEADER VIEW': HeaderViewWrapper,
  'HERO BANNER': HeroBannerWrapper,
  'HERO ELEMENT': heroElementWrapper,
  'HERO ELEMENT 2': HeroElement2Wrapper,
  'HERO ELEMENT 3': HeroElement3Wrapper,
  'HERO ELEMENT 4': HeroElement4Wrapper,
  'HERO ELEMENT 5': HeroElement5Wrapper,
  'HERO ELEMENT 6': HeroElement6Wrapper,
  'HERO ELEMENT 7': HeroElement7Wrapper,
  'HERO ELEMENT 8': HeroElement8Wrapper,
  'HERO ELEMENT 9': HeroElement9Wrapper,
  'HERO ELEMENT 10': HeroElement10Wrapper,
  'HERO ELEMENT 11': heroElement11Wrapper,
  'HERO ELEMENT 12': HeroElement12Wrapper,
  'HERO ELEMENT 13': HeroElement13Wrapper,
  'HERO ELEMENT 14': HeroElement14Wrapper,
  'HIDDEN ELEMENT': HiddenElementWrapper,
  'HORIZONTAL LIST': horizontalListWrapper,
  'HYPERLINK': HyperLinkWrapper,
  'HYPERLINK ELEMENT 2': HyperLinkWrapper2,
  'ICONS DISPLAY': IconsDisplayWrapper,
  'IFRAME ELEMENT': IFrameElement,
  'IMAGE ELEMENT': ImageElementWrapper,
  'IMAGE INPUT': ImageInputWrapper,
  'IMAGES CAROUSEL': imagesCarouselWrapper,
  'INDUSTRIES CATEGORIES': industriesCategoriesWrapper,
  'INFO CTA':InfoCTAWrapper,
  'INFO CTA 2':InfoCTA2Wrapper,
  'INFO CTA 3':InfoCTA3Wrapper,
  'INSIGHT PANEL 1':insightPanel1Wrapper,
  'INSIGHT PANEL 2':insightPanel2Wrapper,
  'INSIGHT PANEL 3':insightPanel3Wrapper,
  'INVOICE ELEMENT':InvoiceElement,
  'JUMBOTRON 1':JumboTron1Wrapper,
  'LINE CHART':lineChartWrapper,
  'LINE CHART 2':lineChart2Wrapper,
  'LIST ELEMENT':listElementWrapper,
  'LIST ELEMENT 2':listElement2Wrapper,
  'LIST ELEMENT 3':listElement3Wrapper,
  'LIST ELEMENT 4':listElement4Wrapper,
  'LIST ELEMENT 5':listElement5Wrapper,
  'LIVE CHAT':LiveChatWrapper,
  'LIVE CHAT 2':liveChat2Wrapper,
  'LOCATION PICKER':locationPickerWrapper,
  'LOGIN FACEBOOK':loginFacebookWrapper,
  'LOGIN GOOGLE':loginGoogleWrapper,
  'LOGIN MIPAY':loginMipayWrapper,
  'MANUAL SLIDESHOW':manualSlideshowWrapper,
  'MARKUP ELEMENT':MarkupElementWrapper,
  'MENU SERVICE BUTTON':menuServiceButtonWrapper,
  'MESSAGE SUMMARY':messageSummaryWrapper,
  'MESSAGE LIST':messagesListWrapper,
  'MONTH RANGE PICKER':monthRangePickerWrapper,
  'MONTH YEAR':monthYearMipayWrapper,
  'MSISDN INPUT':MsisdnInputWrapper,
  'MULTILINE CHART':MulitLineChartWrapper,
  'NAVBAR 2':navbar2Wrapper,
  'NAVBAR 3':navbar3Wrapper,
  'NAVBAR 4':navbar4Wrapper,
  'NAVBAR 5':navbar5Wrapper,
  'NAVBAR 6':navbar6Wrapper,
  'NAVBAR 7':navbar7Wrapper,
  'NAVBAR 8':navbar8Wrapper,
  'NAVBAR 9':navbar9Wrapper,
  'NAVBAR 10':navbar10Wrapper,
  'NAVBAR 11':navbar11Wrapper,
  'NAVBAR 12':navbar12Wrapper,
  'NAVBAR 13':navbar13Wrapper,
  'NAVBAR 14':navbar14Wrapper,
  'NAVBAR 15':navbar15Wrapper,
  'NAVBAR DEFAULT':navbarDefaultWrapper,
  'NENASASA RESELLER USER MANUAL':nenasasaResellerUserManualWrapper,
  'NEW CUSTOMER':newCustomerWrapper,
  'NEW ITEM':newItemWrapper,
  'NEXT CLIENT':nextClientWrapper,
  'NOTIFICATION BUTTON':notificationButtonWrapper,
  'NOTIFICATION PANEL':notificationPanelWrapper,
  'NUMBER INPUT':NumberInputWrapper,
  'NUMBER PICKER':NumberPickerWrapper,
  'ORDER DETAILS':orderDetailsWrapper,
  'ORDER SUMMARY':orderSummaryWrapper,
  'ORDER TIMELINE':orderTimelineWrapper,
  'OVERVIEW ELEMENT':OverViewELementWrapper,
  'PASSWORD INPUT':passwordInputWrapper,
  'PAYMENT METHOD SELECT':paymentMethodSelectWrapper,
  'PAYMENT METHOD SUMMARY':paymentMethodSummaryWrapper,
  'PAYMENT OPTIONS':paymentOptionsWrapper,
  'PAYMENT SELECTOR':paymentSelectorWrapper,
  'PAYMENT STATUS':paymentStatusWrapper,
  'PAYMENTS PAGE BAR':paymentsPageBarWrapper,
  'PAYMENTS SETUP':paymentsSetupWrapper,
  'PIE CHART':pieChartWrapper,
  'PIN INPUT':PinInputWrapper,
  'PINPAD INPUT':PinPadInputWrapper,
  'PRICE CARDS':priceCardsWrapper,
  'PRICE CARDS 2':priceCards2Wrapper,
  'PRICE SELECT':priceSelectWrapper,
  'PRICE TABLE':priceTableWrapper,
  'PRINT BUTTON':PrintButtonWrapper,
  'PRODUCT IMAGE UPLOAD':productImageUploadWrapper,
  'PRODUCT LIST':productListWrapper,
  'PRODUCT META VIEW':productMetaViewWrapper,
  'PRODUCT OPTIONS':productOptionsWrapper,
  'PRODUCT PRICE COMPARISON':productPriceComparisonWrapper,
  'PRODUCT VARIANT':ProductVariantWrapper,
  'PRODUCT VIEW':productViewWrapper,
  'PRODUCTS CAROUSEL':productsCarouselWrapper,
  'PRODUCTS ELEMENT':productsElementWrapper,
  'PRODUCTS EXPIRY':productsExpiryWrapper,
  'PRODUCTS GRID 2':productsGrid2Wrapper,
  'PURCHASE ORDER EDITOR':purchaseOrderEditorWrapper,
  'QUICK LINKS':quickLinksWrapper,
  'QUICK OVERVIEW':quickOverviewWrapper,
  'QUOTE ELEMENT':quoteElementWrapper,
  'RADIO BUTTON CARD':radioButtonCardWrapper,
  'RADIO GROUP':radioGroupWrapper,
  'RATING SCALE':ratingScaleWrapper,
  'Recaptcha element':RecaptchaElementWrapper,
  'RECEIPT ELEMENT':receiptElementWrapper,
  'RECEIVE SYNC':ReceiveSyncWrapper,
  'REDIRECT ELEMENT':redirectElementWrapper,
  'RICH TEXT EDITOR':RichTextEditorWrapper,
  'SROLL TO TOP':ScrollToTop,
  'SEARCH INPUT':SearchInputWrapper,
  'SECTION 1':section1Wrapper,
  'SECTION 11':section11Wrapper,
  'SECTION ELEMENT':sectionElementWrapper,
  'SECTION FRONT':sectionFrontWrapper,
  'SECTION FRONT 2':sectionFront2Wrapper,
  'SECTION TITLE':sectionTitleWrapper,
  'SELECT ELEMENT':SelectElementWrapper,
  'SERVICE ATTENDANT SELECTOR':serviceAttendantSelectorWrapper,
  'SERVICE BUTTON':ServiceButtonWrapper,
  'SERVICE DESCRIPTION':serviceDescriptionWrapper,
  'SERVICE SELECT':serviceSelectWrapper,
  'SERVICE TITLE':serviceTitleWrapper,
  'SERVICES CAROUSEL':servicesCarouselWrapper,
  'SETTINGS ELEMENT':SettingsElementWrapper,
  'SHARE BUTTON':shareButtonWrapper,
  'SHARE LINK':ShareLinkWrapper,
  'SHARE LOCATION':ShareLocationWrapper,
  'SHOPPING CART BTN':shoppingCartBtnWrapper,
  'SKIP BUTTON':skipButtonWrapper,
  'SMS FLOAT PURCHASE':smsFloatPurchaseWrapper,
  'SOCIAL MEDIA POINTS':socialMediaPointsWrapper,
  'SPACER ELEMENT':SpacerElementWrapper,
  'SPECIALIZATION SELECTOR':specializationSelectorWrapper,
  'SPLIT BUTTON':SplitButton,
  'SPLIT DETAILS':splitDetailsWrapper,
  'STACKED BAR':stackedBarWrapper,
  'STAFF INFO':staffInfoWrapper,
  'STATIC DROPDOWN SELECT':staticDropdownSelectWrapper,
  'STATIC SHOPPING CART':StaticShoppingCartWrapper,
  'STATS ELEMENT':statsElementWrapper,
  'STATS ELEMENT 2':statsElement2Wrapper,
  'STEPS PROGRESS':StepsProgressWrapper,
  'STEPS PROGRESS 2':stepsProgress2Wrapper,
  'STEPS TIMELINE':stepsTimelineWrapper,
  'STORE SUMMARY':storeSummaryWrapper,
  'SUBDOMAIN INPUT':subdomainInputWrapper,
  'SUBMIT':SubmitElementWrapper,
  'SUMMARY BOXES':summaryBoxesWrapper,
  'SUMMARY CARD':summaryCardWrapper,
  'SUMMARY CHART':summaryChartWrapper,
  'SUMMARY RETURNS':summaryReturnsWrapper,
  'SUMMARY TAB':SummaryTabWrapper,
  'SUMMARY TABS':summaryTabsWrapper,
  'TAG INPUT':tagInputWrapper,
  'Telephone Input':TelephoneInputWrapper,
  'TEMPLATE SELECTOR':templateSelectorWrapper,
  'TERMS CONDITIONS':TermsConditionWrapper,
  'TEXT AREA':TextAreaWrapper,
  'TEXT INPUT':TextInputWrapper,
  'TEXT VIEW':TextViewWrapper,
  'TILE ELEMENT':TileElementWrapper,
  'TILE ELEMENT 2':TileElementWrapper2,
  'TILE ELEMENT 3':TileElementWrapper3,
  'TILE ELEMENT 4':TileElementWrapper4,
  'TILE ELEMENT 5':TileElementWrapper5,
  'TILE ELEMENT 6':TileElementWrapper6,
  'TILE ELEMENT 7':TileElementWrapper7,
  'TILE ELEMENT 8':TileElementWrapper8,
  'TIME':TimeWrapper,
  'TIME ELEMENT':TimeELementWrapper,
  'TIME SLOT PICKER':timeSlotPickerWrapper,
  'TOGGLE INPUT':ToggleInputWrapper,
  'TOP SELLING ITEMS':topSellingItemsWrapper,
  'TOP SELLING PRODUCTS':topSellingProductsWrapper,
  'UPCOMING APPOINTMENTS':UpcomingAppointmentsWrapper,
  'USER INFO':userInfoWrapper,
  'VENDOR BADGES':VendorBadgesWrapper,
  'VERTICAL SERVICE BUTTON':VerticalServiceButtonWrapper,
  'wavey-hero':WavyHeroElementWrapper,
  'WEEK ANALYSIS':weekAnalysisWrapper,
  'WISHLIST EDITOR':WishListWrapper,
  'WISHLIST BUTTON':WishListButtonWrapper,
  'YOUTUBE EMBED ELEMENT':YoutubeEmbedElementWrapper, 
  
};


const ElementLoader = ({
  sectionSize,
  skipForm,
  _dialog,
  submitForm,
  pageGroups,
  element,
  currentPageGroupName,
  setPageSections,
}) => {
  const [status, setStatus] = useState({ loading: true, error: null });
  const elementType = element._1;
  const Component = useMemo(() => componentPathMap[elementType], [elementType]);

  useEffect(() => {
    if (!Component) {
      console.warn(`Unknown component type: ${elementType}`);
    }
  }, [Component, elementType]);

  useEffect(() => {
    // Initialize NProgress
    NProgress.start();

    const loadComponent = async () => {
      try {
        if (!Component) {
          throw new Error(`Component not found for type: ${elementType}`);
        }
      } catch (err) {
        console.error(err);
        setStatus({ loading: false, error: err });
        return;
      } finally {
        NProgress.done();
        setStatus({ loading: false, error: null });
      }
    };

    loadComponent();
  }, [Component, elementType]);


  const newJson = useMemo(() => {
    const elementJson = element._elementJson || [];
    return {
      name: elementJson[0],
      variableType: elementJson[1],
      min: elementJson[2],
      max: elementJson[3],
      formName: elementJson[4],
      defaultValue: elementJson[5],
      icon: elementJson[6],
      elementSize: elementJson[7],
      kind: elementJson[8],
      required: elementJson[9],
      styles: elementJson[10],
      service: elementJson[11],
      height: elementJson[12],
      details: Util.parseJsonOrObject(elementJson[14]),
    };
  }, [element._elementJson]);

  if (status.loading) {
    return (
      <div className="has-text-centered">
        <CircularProgress size="30px" />
      </div>
    );
  }

  if (status.error) {
    return <div className="error-message">Error loading component.</div>;
  }

  if (!Component) {
    return null;
  }

  

  return (
     <Suspense
      fallback={
        <div className="has-text-centered">
          <CircularProgress size="30px" />
        </div>
      }
    >
      <div>
        <Component
          key={`${elementType}-${newJson.name}`}
          setPageSections={setPageSections}
          currentPageGroupName={currentPageGroupName}
          element={newJson}
          submitForm={submitForm}
          _dialog={_dialog}
          skipForm={skipForm}
          sectionSize={sectionSize}
        />
      </div>
    </Suspense>
  );
};

export default ElementLoader;
