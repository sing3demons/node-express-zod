import { IRoute } from '../route'

export default class ExampleController {
  constructor(private readonly route: IRoute) {}

  get = this.route.get('/example').handler(async () => {
    return {
      data: 'Hello World',
    }
  })
}
