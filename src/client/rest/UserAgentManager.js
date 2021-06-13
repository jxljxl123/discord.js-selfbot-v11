const Constants = require('../../util/Constants');

class UserAgentManager {
  constructor() {
    this.build(this.constructor.DEFAULT);
  }

  set({ url, version } = {}) {
    this.build({
      url: url || this.constructor.DFEAULT.url,
      version: version || this.constructor.DEFAULT.version,
    });
  }

  build(ua) {
    this.userAgent = `Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.35 Chrome/91.0.4472.77 Electron/13.0.1 Safari/537.36`;
  }
}

UserAgentManager.DEFAULT = {
  url: Constants.Package.homepage.split('#')[0],
  version: Constants.Package.version,
};

module.exports = UserAgentManager;
