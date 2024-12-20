export type PrivilegeNames = {
    READ_DASHBOARD: 'READ_DASHBOARD';
    READ_REMITANCES: 'READ_REMITANCES';
    READ_RECIPIENTS: 'READ_RECIPIENTS';
    READ_GENERAL_REMITTANCES_REPORT: 'READ_GENERAL_REMITTANCES_REPORT';
    READ_GENERAL_INSTITUTIONS_REPORT: 'READ_GENERAL_INSTITUTIONS_REPORT';
    READ_CONCILIATION_REMITTANCES_REPORT: 'READ_CONCILIATION_REMITTANCES_REPORT';
};
export type QueryRequestParams = {
    startDate?: string;
    endDate?: string;
    senderId?: string[];
    receiverId?: string[];
    page?: number;
    pageSize?: number;
};
