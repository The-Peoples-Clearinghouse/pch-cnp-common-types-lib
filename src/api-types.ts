export type RemittancesResponse = {
    id: string;
    amountSent: number;
    amountReceived: number;
    fx: number;
    senderName: string;
    senderInstitutionId: string;
    recipientInstitutionId: string;
    status: string;
    initiatedAtTs: number;
    recipientName: string;
    recipientAddressState: string;
    recipientId: string;
    amlScore: number;
};

export type QueryResponse<T> = {
	data: T
	errors: {
		error: string
		description: string
	}[]
}

export type PaginatedQueryResponse<T> = QueryResponse<T> & {
	pagination: {
		page: number
		pageSize: number
		total: number
		totalPages: number
		totalItems: number
	}
}

export type RemittancesSummaryResponse = {
    remittancesTotalAmount: number;
    remittancesTotalVolume: number;
};

export type RemittancesAmounts = {
    date: number;
    totalAmount: number;
};

export type RemittancesVolume = {
    date: number;
    totalVolume: number;
};

export const Granularity = {
    hour: '1h',
    day: '1D',
    week: '7D',
    month: '1M',
    quarter: '3M',
    semester: '6M',
    year: '1Y',
} as const;
export type Granularity = keyof typeof Granularity;

export type LatestRemittancesResponse = {
    id: string;
    amountSent: number;
    amountReceived: number;
    fx: number;
    senderName: string;
    senderInstitutionId: string;
    recipientInstitutionId: string;
    recipientName: string;
    initiatedAtTs: number;
    status: string;
};

export type RecipientsResponse = {
    recipientId: string;
    fullName: string;
    recipientInstitutionId: string;
    addressState: string;
    msisdn: string;
};

export type TopRecipient = {
    recipientId: string;
    fullName: string;
    recipientInstitutionId: string;
    addressState: string;
    msisdn: string;
    totalAmountReceived: number;
    remittancesVolume: number;
};

export type RecipientsIds = {
    sender: string[];
    recipient: string[];
};

export const FinancialEntityType = {
    NATIONAL_DFSP: 'NATIONAL_DFSP',
    CNP: 'CNP',
    FOREIGNER_DFSP: 'FOREIGNER_DFSP',
    SWITCH: 'SWITCH',
} as const;
export type FinancialEntityType = keyof typeof FinancialEntityType;

export type FinancialEntity = {
    financialEntityName: string;
    financialEntityId: string;
    financialEntityType: FinancialEntityType;
};

export const FeeType = {
    SENDER: 'SENDER',
    RECEIVER: 'RECEIVER',
    SWITCH: 'SWITCH',
    CNP: 'CNP',
} as const;
export type FeeType = keyof typeof FeeType;

export const TransferType = {
    REMMITANCE: 'REMMITANCE',
    DOMESTIC: 'DOMESTIC',
} as const;
export type TransferType = keyof typeof TransferType;

export const CalculationType = {
    SENDER_MINUS_RECEIVER: 'SENDER_MINUS_RECEIVER',
    FIXED: 'FIXED',
    TOTAL_TRANSFER_AMOUNT_PERCENTAGE: 'TOTAL_TRANSFER_AMOUNT_PERCENTAGE',
    SENDER_FEE_PERCENTAGE: 'SENDER_FEE_PERCENTAGE',
} as const;
export type CalculationType = keyof typeof CalculationType;

export type FeeDefinition = {
    _id?: string;
    financialEntityId: string;
    active: boolean;
    transferType: TransferType;
    feeType: FeeType;
    calculationType: CalculationType;
    feesCurrency: string | null;
    fixedAmount: number | null;
    senderFeePercentage: number | null;
    totalTransferAmountPercentage: number | null;
    startDate: number;
    endDate: number;
};

//Reports
export type TransferFiltersOrder = {
    id: string;
    senderInstitutionId: string;
    completedAtTs: number | null;
    senderFullName: string;
    recipientFullName: string;
    amountReceived: number;
    fxRate: number;
    amountSent: number;
    recipientInstitutionId: string;
};

export type RecipientInstitutionRemittances = {
    totalAmountOfRemittances: number;
    totalNumberOfRemittances: number;
    recipientInstitutionId: string;
};

export type SenderInstitutionRemittances = {
    totalAmountOfRemittances: number;
    totalNumberOfRemittances: number;
    senderInstitutionId: string;
};

export type RemittancesSummaryByInstitutionsResponse = {
    senderInstitutions: SenderInstitutionRemittances[];
    recipientInstitutions: RecipientInstitutionRemittances[];
};

export type RemittanceData = {
    rafikiPaymentId: string;
    recipientFullName: string;
    senderFullName: string;
    recipientInstitutionId: string;
    amountReceived: number;
    completedAtTs: number;
};

export type RemittancesAndTotalReceivedAmount = {
    remittances: RemittanceData[];
    totalReceivedAmount: number;
};

export type RemittancesByInstitutionsResponse = {
    [key: string]: RemittancesAndTotalReceivedAmount;
};