import Product from '#models/product'

export default class SearchController {
  public async index({ request, view }: any) {
    const searchQuery = request.input('q', '').trim()
    let products: Product[] = []

    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      products = await (Product as any).query()
        .whereRaw('LOWER(name) LIKE ?', [`%${searchLower}%`])
        .orWhereRaw('LOWER(description) LIKE ?', [`%${searchLower}%`])
    }

    return view.render('pages/search_results', {
      products,
      searchQuery,
    })
  }
}