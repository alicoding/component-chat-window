(function () {
  var element;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/test.html', function (win, doc) {
      element = iframeHandler.document.querySelector('ceci-chat-window');
      done();
    });
  });

  describe('Ceci Button', function () {
    test('Sanity check', function (done) {
      chai.assert(element.ceci, 'Ceci descriptor exists.');
      iframeHandler.runIframeTest('Sanity Check', done);
    });

    test('Listeners', function (done) {
      iframeHandler.testListeners(element, done, {
        check: {
          clear: function (e, channel) {
            chai.assert(true);
          },
          room: function (e, channel) {
            chai.assert(true);
          },
          sendmessage: function (e, channel) {
            chai.assert(true);
          },
          username: function (e, channel) {
            chai.assert(true);
          }
        }
      });
    });
  });
})();
