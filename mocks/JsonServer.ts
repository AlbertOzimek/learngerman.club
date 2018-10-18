import * as jsonServer from 'json-server';

export class JsonServer {
  private jsonServer;
  private nodeServer;

  start(done) {
    this.jsonServer = jsonServer.create();
    this.jsonServer.use(jsonServer.defaults());
    this.nodeServer = this.jsonServer.listen(9999, () => {
        console.log('--------- JSON server is running -----------------');
        done();
      }
    );
  }

  stop(done) {
    this.nodeServer.close();
  }

  mockGet(url: string, response: string) {
    this.jsonServer.get(url, (req, res) => {
      res.jsonp(response);
    });
  }

  mockPost(url: string, response: string) {
    this.jsonServer.post(url, (req, res) => {
      res.jsonp(response);
    });
  }

  mockPut(url: string, response: string) {
    this.jsonServer.put(url, (req, res) => {
      res.jsonp(response);
    });
  }

}
