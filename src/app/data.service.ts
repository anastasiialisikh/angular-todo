import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	// createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
	// 	throw new Error("Method not implemented.");
	// }

	createDb() {
		const todos = [
			{
				id: 1,
				title: 'fuck',
				done: false
			},
			{
				id: 2,
				title: 'fuck fuck',
				done: false
			},
			{
				id: 3,
				title: 'i am tired too',
				done: true
			},
			{
				id: 4,
				title: 'i am tired',
				done: false
			}
		];
		return { todos };
	}
	
}