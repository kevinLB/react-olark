type ChatBoxSize = 'sm' | 'md' | 'lg' | 'dr';

export interface IOlarkSystemConfig {
  localization?: string;
  group?: string;
  hb_chatbox_size?: ChatBoxSize;
  hb_custom_style?: {
    general: {
      fonts?: string[];
      corners?: string;
      secondaryColor?: string;
    };
  };
  right_to_left?: boolean;
  hb_disable_mobile?: boolean;
  hb_detached?: boolean;
  hb_dark_theme?: boolean;
  hb_primary_color?: string;
  hb_show_as_tab?: boolean;
  hb_show_button_text?: boolean; // true
  is_single_page_application?: boolean;
}

export interface IOlarkBoxConfig {
  inline?: boolean;
  start_hidden?: boolean;
  start_expanded?: boolean;
}

export interface IOlarkLocaleConfig {
  /* online chatbox strings */
  welcome_title?: string;
  chatting_title?: string;
  welcome_message?: string;
  chat_input_text?: string;
  ended_chat_message?: string;

  /* offline chatbox strings */
  unavailable_title?: string;
  away_message?: string;
  name_input_text?: string;
  email_input_text?: string;
  phone_input_text?: string;
  offline_note_message?: string;
  send_button_text?: string;
  offline_note_thankyou_text?: string;
  offline_note_error_text?: string;

  /* pre-chat survey strings */
  // name_input_text?: string;
  // email_input_text?: string;
  // phone_input_text?: string;
  introduction_error_text?: string;
  introduction_messages?: string;
  introduction_submit_button_text?: string;

  /* offline message form strings*/
  offline_survey_submit_button_text?: string;
  offline_survey_next_button_text?: string;
  offline_survey_thank_you_message?: string;
  offline_survey_welcome_message?: string;
  offline_survey_name_label?: string;
  offline_survey_name_placeholder?: string;
  offline_survey_email_label?: string;
  offline_survey_email_placeholder?: string;
  offline_survey_phone_label?: string;
  offline_survey_phone_placeholder?: string;
  offline_survey_website_label?: string;
  offline_survey_website_placeholder?: string;
  offline_required_error_message?: string;
  offline_email_validation_message?: string;
  offline_phone_validation_message?: string;
  offline_website_validation_message?: string;

  /* chat ratings strings */
  feedback_survey_question_chat_text?: string;
  feedback_survey_question_operator_intelligence_text?: string;
  feedback_survey_question_operator_speed_text?: string;
  feedback_survey_question_operator_attitude_text?: string;
  feedback_survey_question_1_text?: string;
  feedback_survey_question_2_text?: string;
  feedback_survey_question_3_text?: string;
  feedback_survey_question_4_text?: string;
  feedback_survey_question_5_text?: string;
  feedback_survey_question_chat_low?: string;
  feedback_survey_question_chat_high?: string;
  feedback_survey_question_operator_intelligence_low?: string;
  feedback_survey_question_operator_intelligence_high?: string;
  feedback_survey_question_operator_speed_low?: string;
  feedback_survey_question_operator_speed_high?: string;
  feedback_survey_question_operator_attitude_low?: string;
  feedback_survey_question_operator_attitude_high?: string;
  feedback_survey_question_additional_feedback_text?: string;
  feedback_survey_button_next?: string;
  feedback_survey_button_submitting?: string;
  feedback_survey_button_finish?: string;
  feedback_survey_end_message?: string;
  feedback_survey_submission_error_message?: string;
  feedback_survey_begin_button_text?: string;
  feedback_survey_complete_button_text?: string;
  feedback_survey_cancel_text?: string;
  restart_chat_online_button_text?: string;
  restart_chat_offline_button_text?: string;

  /* send transcript strings */
  send_transcript_title_text?: string;
  send_transcript_begin_button_text?: string;
  send_transcript_complete_button_text?: string;
  send_transcript_error_text?: string;
  send_transcript_cancel_text?: string;
  send_transcript_placeholder?: string;
}

export interface OlarkVisitorDetails {
  // the browser that this visitor is using (e.g. 'Chrome 12.1')
  browser: string;
  // approximate city location
  city: string;
  // the URL from which the visitor began their conversation"
  conversationBeginPage: string;
  // total number of times this visitor has chatted with an operator"
  conversationCount: string;
  // approximate country
  country: string;
  // approximate country (in ISO-standard format, e.g. UK, DE, JP, etc)
  countryCode: string;
  // the current page the visitor is on (has a title and URL)
  currentPage: string;
  // you can retrieve any custom fields that you set with api.visitor.updateCustomFields
  customFields: {
    [fieldName: string]: any;
  };
  // visitor's email address
  emailAddress: string;
  // visitor's full name
  fullName: string;
  // This will return "not available" in an effort to remove PII from our API.
  ip: string;
  // will be true if the visitor is having a conversation right now"
  isConversing: boolean;
  // number of messages sent and received for this visitor all-time on your site"
  messageCountAcrossAllVisits: string;
  // number of messages sent and received during this conversation"
  messageCountForThisVisit: string;
  // the operating system that this visitor is using (e.g. Windows, Mac, or Linux)
  operatingSystem: string;
  // organization that this visitor might be affiliated with
  organization: string;
  // total number of pages that this visitor has viewed all-time on your site
  pageCountacrossallvisits: string;
  // number of pages that this visitor has viewed during this visit
  pageCountForThisVisit: string;
  // visitor's phone number
  phoneNumber: string;
  // a list of the last 10 pages seen by the visitor (each page has a title and URL)
  recentpagehistory: string;
  // will be true if the visitor came to your site from an email or blogging campaign at some point
  referredByCampaignEver: string;
  // will be true if the visitor came to your site from an email or blogging campaign this visit
  referredByCampaignThisVisit: string;
  // will be true if the visitor came to your site from a paid advertisement at some point
  referredByPaidAdvertisingEver: string;
  // will be true if the visitor came to your site from a paid advertisement for this visit
  referredByPaidAdvertisingThisVisit: string;
  // the URL that referred this visitor to your website (e.g. a Google search, advertisement, blog post, etc)
  referrer: string;
  // approximate state or province
  region: string;
  // search text that was typed in Google, Yahoo, or Bing to get to your site in past visits
  searchtextforpreviousvisits: string;
  // search text that was typed in Google, Yahoo, or Bing to get to your site
  searchtextForThisVisit: string;
  // seconds since either the visitor or operator sent a message"
  secondsSinceLastMessage: string;
  // seconds since the visitor sent a message"
  secondsSinceLastMessageToOperator: string;
  // seconds since the operator sent a message"
  secondsSinceLastMessageToVisitor: string;
  // seconds since the operator last received a notification"
  secondsSincelastnotificationtooperator: string;
  // total number of seconds that this visitor has spent on your site over all their visits
  secondsSpentacrossallvisits: string;
  // number of seconds that this visitor has spent on your site
  secondsSpentForThisVisit: string;
  // total number of times this visitor has visited your site
  visitCount: string;
}

export interface OlarkChatRule {
  // unique identifier for this rule, e.g. _important_visitor_rule_1_
  id: string;
  // human-readable description of what this rule does, e.g. 'notifies the operator about important visitors'
  description?: string;
  // is only supposed to trigger once per page
  perPage?: boolean;
  // is only supposed to trigger once per visit
  perVisit?: boolean;
  // function that evaluates a condition and calls pass when true
  condition(passCallback: () => void): void;
  // function that performs the action, e.g. notifying the operator
  action(): void;
}

export interface OlarkMessage {
  body: string;
  automated?: boolean;
  targeted?: boolean;
  nickname?: string;
}

export interface OlarkCommand {
  name: string;
  body?: string;
}

export type OlarkConfigureFunction = {
  // system config
  (name: 'system.group', group: string): void;
  (name: 'system.hb_position', position: 'left' | 'right'): void;
  (name: 'system.hb_chatbox_size', size: ChatBoxSize): void;
  (name: 'system.localization', localization: string): void;

  // CalloutBubble config
  (name: 'CalloutBubble.slide', enable: boolean): void;
  (name: 'CalloutBubble.bubble_height', height: number): void;
  (name: 'CalloutBubble.bubble_width', width: number): void;
  (name: 'CalloutBubble.bubble_image_url_offline', url: string): void;
  (name: 'CalloutBubble.bubble_image_url', url: string): void;

  // features config
  (name: 'features.attention_grabber', enable: boolean): void;

  // box config
  (name: 'box.inline', enable: boolean): void;
};

export type OlarkFunction = {
  // Chat box behavior
  (event: 'api.box.setLocale'): void;
  (event: 'api.box.show'): void;
  (event: 'api.box.expand'): void;
  (event: 'api.box.hide'): void;
  (event: 'api.box.shrink'): void;
  (event: 'api.box.onShow', callback: () => void): void;
  (event: 'api.box.onExpand', callback: () => void): void;
  (event: 'api.box.onHide', callback: () => void): void;
  (event: 'api.box.onShrink', callback: () => void): void;

  // Chat conversation
  (event: 'api.chat.setOperatorGroup', options: { group: string }): void;
  (event: 'api.chat.onOfflineMessageToOperator' /* ??? */): void;
  (event: 'api.chat.onReady', callback: () => void): void;
  (event: 'api.chat.onBeginConversation' /* ??? */): void;
  (
    event: 'api.chat.onMessageToOperator',
    callback: (event: { message: OlarkMessage }) => void
  ): void;
  (
    event: 'api.chat.onMessageToVisitor',
    callback: (event: { message: OlarkMessage }) => void
  ): void;
  (
    event: 'api.chat.onCommandFromOperator',
    callback: (event: { command: OlarkCommand }) => void
  ): void;
  (event: 'api.chat.onOperatorsAvailable', callback: () => void): void;
  (event: 'api.chat.onOperatorsAway', callback: () => void): void;
  (event: 'api.chat.sendMessageToVisitor', message: OlarkMessage): void;
  (event: 'api.chat.sendNotificationToOperator', message: OlarkMessage): void;
  (event: 'api.chat.sendNotificationToVisitor', message: OlarkMessage): void;

  (event: 'api.rules.defineRule', rule: OlarkChatRule): void;

  // Visitor information
  (
    event: 'api.visitor.getDetails',
    callback: (visitor: OlarkVisitorDetails) => void
  ): void;
  (event: 'api.visitor.updateCustomFields', dictionary: object): void;
  (
    event: 'api.visitor.updateEmailAddress',
    options: { emailAddress: string }
  ): void;
  (event: 'api.visitor.updateFullName', options: { fullName: string }): void;
  (
    event: 'api.chat.updateVisitorNickname',
    options: {
      snippet: string;
      hidesDefault?: boolean;
    }
  ): void;
  (
    event: 'api.visitor.updatePhoneNumber',
    options: { phoneNumber: string }
  ): void;
  (event: 'api.chat.updateVisitorStatus', options: { snippet: string }): void;
  _: {
    reset(): void;
  };
  configure: OlarkConfigureFunction;
  identify(id: string): void;
};

export type OlarkReactFunction = {
  (
    systemConfig: IOlarkSystemConfig,
    localeConfig: IOlarkLocaleConfig,
    boxConfig: IOlarkBoxConfig
  ): void;
  olarkWasLaunched?: boolean;
};

declare global {
  interface Window {
    olark: OlarkFunction;
    olarkReact: OlarkReactFunction;
  }
}
