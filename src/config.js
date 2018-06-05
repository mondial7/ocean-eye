/**
 * Application wide constants
 *
 */

/**
 * Api
 * @type {Object}
 */
const API = {
  /**
   * @type {String}
   */
  HOST: 'http://localhost:8888/uni/radiator/ocean-eye-app/api/',
}

/**
 * Page => router/navigation
 * @type {Object}
 */
const PAGE = {
  /**
   * @type {String}
   */
  COLLECTIONS: 'collections',
  /**
   * @type {String}
   */
  PLAY: 'play',
  /**
   * @type {String}
   */
  PROFILE: 'profile',
  /**
   * @type {String}
   */
  LOGOUT: 'logout',
}

/**
 * Events
 * @type {Object}
 */
const CUSTOMEVENTS = {
  /**
   * @type {String}
   */
  CHANGE_PAGE: 'changepage',
  /**
   * @type {String}
   */
  UPDATE_ITEMS: 'updateitems',
  /**
   * @type {String}
   */
  PLAY_NAVIGATOR: 'changeplaystep',
  /**
   * @type {String}
   */
  LOGGED_OUT: 'logged-out',
  /**
   * @type {String}
   */
  LOGGING_ERROR: 'logging-error',
  /**
   * @type {String}
   */
  COLLECTION_SAVED: 'collection-saved',
}

/**
 * Play => steps
 * @type {Object}
 */
const PLAY = {
  /**
   * @type {String}
   */
  FLIPPING: 'flipping-cards',
  /**
   * @type {String}
   */
  TUNING: 'tuning-problem',
  /**
   * @type {String}
   */
  END: 'end',
}
