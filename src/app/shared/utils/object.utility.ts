export class ObjectUtility {
  static storeAgentInformation(agent: any): void {
    localStorage.setItem('AGENT', JSON.stringify(agent));
  }
  static getAgentInformation(): any {
    return JSON.parse(localStorage.getItem('AGENT'));
  }

  static removeAgentInformation(): void {
    localStorage.removeItem('AGENT');
  }
}
