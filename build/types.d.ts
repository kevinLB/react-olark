declare type ChatBoxSize = 'sm' | 'md' | 'lg' | 'dr';
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
    hb_show_button_text?: boolean;
    is_single_page_application?: boolean;
}
export interface IOlarkBoxConfig {
    inline?: boolean;
    start_hidden?: boolean;
    start_expanded?: boolean;
}
export interface IOlarkLocaleConfig {
    welcome_title?: string;
    chatting_title?: string;
    welcome_message?: string;
    chat_input_text?: string;
    ended_chat_message?: string;
    unavailable_title?: string;
    away_message?: string;
    name_input_text?: string;
    email_input_text?: string;
    phone_input_text?: string;
    offline_note_message?: string;
    send_button_text?: string;
    offline_note_thankyou_text?: string;
    offline_note_error_text?: string;
    introduction_error_text?: string;
    introduction_messages?: string;
    introduction_submit_button_text?: string;
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
    send_transcript_title_text?: string;
    send_transcript_begin_button_text?: string;
    send_transcript_complete_button_text?: string;
    send_transcript_error_text?: string;
    send_transcript_cancel_text?: string;
    send_transcript_placeholder?: string;
}
export interface OlarkVisitorDetails {
    browser: string;
    city: string;
    conversationBeginPage: string;
    conversationCount: string;
    country: string;
    countryCode: string;
    currentPage: string;
    customFields: {
        [fieldName: string]: any;
    };
    emailAddress: string;
    fullName: string;
    ip: string;
    isConversing: boolean;
    messageCountAcrossAllVisits: string;
    messageCountForThisVisit: string;
    operatingSystem: string;
    organization: string;
    pageCountacrossallvisits: string;
    pageCountForThisVisit: string;
    phoneNumber: string;
    recentpagehistory: string;
    referredByCampaignEver: string;
    referredByCampaignThisVisit: string;
    referredByPaidAdvertisingEver: string;
    referredByPaidAdvertisingThisVisit: string;
    referrer: string;
    region: string;
    searchtextforpreviousvisits: string;
    searchtextForThisVisit: string;
    secondsSinceLastMessage: string;
    secondsSinceLastMessageToOperator: string;
    secondsSinceLastMessageToVisitor: string;
    secondsSincelastnotificationtooperator: string;
    secondsSpentacrossallvisits: string;
    secondsSpentForThisVisit: string;
    visitCount: string;
}
export interface OlarkChatRule {
    id: string;
    description?: string;
    perPage?: boolean;
    perVisit?: boolean;
    condition(passCallback: () => void): void;
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
export declare type OlarkConfigureFunction = {
    (name: 'system.group', group: string): void;
    (name: 'system.hb_position', position: 'left' | 'right'): void;
    (name: 'system.hb_chatbox_size', size: ChatBoxSize): void;
    (name: 'system.localization', localization: string): void;
    (name: 'CalloutBubble.slide', enable: boolean): void;
    (name: 'CalloutBubble.bubble_height', height: number): void;
    (name: 'CalloutBubble.bubble_width', width: number): void;
    (name: 'CalloutBubble.bubble_image_url_offline', url: string): void;
    (name: 'CalloutBubble.bubble_image_url', url: string): void;
    (name: 'features.attention_grabber', enable: boolean): void;
    (name: 'box.inline', enable: boolean): void;
};
export declare type OlarkFunction = {
    (event: 'api.box.setLocale'): void;
    (event: 'api.box.show'): void;
    (event: 'api.box.expand'): void;
    (event: 'api.box.hide'): void;
    (event: 'api.box.shrink'): void;
    (event: 'api.box.onShow', callback: () => void): void;
    (event: 'api.box.onExpand', callback: () => void): void;
    (event: 'api.box.onHide', callback: () => void): void;
    (event: 'api.box.onShrink', callback: () => void): void;
    (event: 'api.chat.setOperatorGroup', options: {
        group: string;
    }): void;
    (event: 'api.chat.onOfflineMessageToOperator'): void;
    (event: 'api.chat.onReady', callback: () => void): void;
    (event: 'api.chat.onBeginConversation'): void;
    (event: 'api.chat.onMessageToOperator', callback: (event: {
        message: OlarkMessage;
    }) => void): void;
    (event: 'api.chat.onMessageToVisitor', callback: (event: {
        message: OlarkMessage;
    }) => void): void;
    (event: 'api.chat.onCommandFromOperator', callback: (event: {
        command: OlarkCommand;
    }) => void): void;
    (event: 'api.chat.onOperatorsAvailable', callback: () => void): void;
    (event: 'api.chat.onOperatorsAway', callback: () => void): void;
    (event: 'api.chat.sendMessageToVisitor', message: OlarkMessage): void;
    (event: 'api.chat.sendNotificationToOperator', message: OlarkMessage): void;
    (event: 'api.chat.sendNotificationToVisitor', message: OlarkMessage): void;
    (event: 'api.rules.defineRule', rule: OlarkChatRule): void;
    (event: 'api.visitor.getDetails', callback: (visitor: OlarkVisitorDetails) => void): void;
    (event: 'api.visitor.updateCustomFields', dictionary: object): void;
    (event: 'api.visitor.updateEmailAddress', options: {
        emailAddress: string;
    }): void;
    (event: 'api.visitor.updateFullName', options: {
        fullName: string;
    }): void;
    (event: 'api.chat.updateVisitorNickname', options: {
        snippet: string;
        hidesDefault?: boolean;
    }): void;
    (event: 'api.visitor.updatePhoneNumber', options: {
        phoneNumber: string;
    }): void;
    (event: 'api.chat.updateVisitorStatus', options: {
        snippet: string;
    }): void;
    _: {
        reset(): void;
    };
    configure: OlarkConfigureFunction;
    identify(id: string): void;
};
export declare type OlarkReactFunction = {
    (systemConfig: IOlarkSystemConfig, localeConfig: IOlarkLocaleConfig, boxConfig: IOlarkBoxConfig): void;
    olarkWasLaunched?: boolean;
};
declare global {
    interface Window {
        olark: OlarkFunction;
        olarkReact: OlarkReactFunction;
    }
}
export {};
