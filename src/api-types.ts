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


