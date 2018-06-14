import axios from 'axios'
import ExtendableError from 'es6-error'

import { baseURL } from '../config'
import Pagination from '../pagination'

const createPagination = (data, headers) => {
    if ('x-page' in headers) {
        const pagination = new Pagination(
            parseInt(headers['x-page'], 10),
            parseInt(headers['x-per-page'], 10),
            parseInt(headers['x-total-count'], 10),
            parseInt(headers['x-count'], 10)
        )

        return { data, pagination }
    }

    return data
}

const extractMessages = function (violations) {
    const messages = {}

    for (const { propertyPath, title } of violations) {
        if (!messages[propertyPath]) {
            messages[propertyPath] = []
        }

        messages[propertyPath].push(title)
    }

    return messages
}

export class RequestError extends ExtendableError {
    constructor (message, status = 400) {
        super(message)

        this.status = status
    }
}

export class ProblemDetails extends RequestError {
    constructor ({ title, detail, violations }, status = 400) {
        super(title, status)

        this.detail = detail
        this.violations = violations
        this.messages = extractMessages(violations)
    }
}

export const handler = async function (cb) {
    try {
        const { data } = await cb

        return data
    } catch ({ response }) {
        const { headers, data, status } = response

        if (headers['content-type'] === 'application/problem+json') {
            throw new ProblemDetails(data, status)
        }

        throw new RequestError(data.message, status)
    }
}

export default axios.create({
    baseURL,
    timeout: 5000,
    transformResponse: axios.defaults.transformResponse.concat([
        createPagination
    ])
})
