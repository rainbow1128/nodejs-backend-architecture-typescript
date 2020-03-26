import { Schema, model, Document, Types } from 'mongoose';

export const DOCUMENT_NAME = 'ApiKey';
export const COLLECTION_NAME = 'api_keys';

export interface IApiKey extends Document {
	key: string;
	version: number;
	metadata: string;
	status?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

const schema = new Schema(
	{
		key: {
			type: Schema.Types.String,
			required: true,
			unique: true,
			maxlength: 1024
		},
		version: {
			type: Schema.Types.Number,
			required: true,
			min: 1,
			max: 100
		},
		metadata: {
			type: Schema.Types.String,
			required: true,
		},
		status: {
			type: Schema.Types.Boolean,
			default: true
		},
		createdAt: {
			type: Date,
			required: true,
			select: false
		},
		updatedAt: {
			type: Date,
			required: true,
			select: false
		}
	},
	{
		versionKey: false
	});

const ApiKey = model<IApiKey>(DOCUMENT_NAME, schema, COLLECTION_NAME);

export default ApiKey;