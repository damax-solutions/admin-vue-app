
export default class {
    constructor (page, perPage, total, count) {
        this.page = page
        this.perPage = perPage
        this.total = total
        this.count = count
        this.totalPages = Math.ceil(total / perPage) || 1
    }

    get first () {
        return this.page === 1
    }

    get last () {
        return this.page === this.totalPages
    }

    get prev () {
        return this.first ? 1 : this.page - 1
    }

    get next () {
        return this.last ? this.totalPages : this.page + 1
    }

    get offsetStart () {
        return this.perPage * (this.page - 1) + 1
    }

    get offsetEnd () {
        return this.perPage * (this.page - 1) + this.count
    }

    pages (proximity = 2) {
        const total = proximity * 2 + 1
        const pages = [...new Array(total > this.totalPages ? this.totalPages : total).keys()]
        const start = this.page - proximity < 1 ? 1 : (this.page + proximity) > this.totalPages ? this.totalPages - 2 * proximity : this.page - proximity
        const delta = start < 1 ? 1 : start

        return pages.map(i => i + delta)
    }
}
