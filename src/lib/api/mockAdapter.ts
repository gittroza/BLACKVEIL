import { VideoRecord } from '../../types'

export interface VideoProvider {
  fetchTrending(): Promise<VideoRecord[]>
  fetchById(id:string): Promise<VideoRecord | null>
  search(q:string): Promise<VideoRecord[]>
  fetchRelated(id:string): Promise<VideoRecord[]>
}

export class MockAdapter implements VideoProvider{
  data: VideoRecord[]
  constructor(data:VideoRecord[]){ this.data = data }
  async fetchTrending(){ return this.data.slice(0,12) }
  async fetchById(id:string){ return this.data.find(d=>d.id===id) ?? null }
  async search(q:string){
    const ql = q.toLowerCase()
    return this.data.filter(d=>d.title.toLowerCase().includes(ql))
  }
  async fetchRelated(id:string){ return this.data.filter(d=>d.id!==id).slice(0,6) }
}
