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
    id: string;
    financialEntityId: string;
    active: boolean;
    transferType: TransferType;
    feeType: FeeType;
    calculationType: CalculationType; // calculated types applies ONLY to 'CNP' or 'SWITCH' FeeType
    feesCurrency: string | null;
    fixedAmount: number | null; // needs to be null if calculationType is dynamic
    senderFeePercentage: number | null; //goes from inclusive 0 to 100 exclusive
    totalTransferAmountPercentage: number | null; //goes from inclusive 0 to 100 exclusive
    startDate: number;
    endDate: number;
};

