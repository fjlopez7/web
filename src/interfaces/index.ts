export interface Play {
    id: string,
    title: string,
    version: string,
    collaborators: string[],
    keywords: string[],
    pathmd?: string,
    gitId: string,
  }

export interface Playbook {
  id: string,
  title: string,
  units: string[],
  keywords: string[],
  creator: string
}