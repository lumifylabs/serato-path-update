# serato-path-update
Update the file path of tracks in your Serato crates

### What is this for?

Have you ever moved tracks around to better organize? Perhaps you've moved your song library to Dropbox? This package will help you update all your tracks in seconds. You can use this 

### What this isn't

This is not going to replace the Serato 'Find Lost Tracks' functionality. This is not meant to find one-off lost tracks. This is meant for batch updates -- when you've moved your entire library to cloud storage for example.

### Installation

You need to have Node and NPM installed on your computer:

```bash
npm i -g serato-path-update
```

### Usage

Don't forget the trailing slash! 

```bash
node serato-path-update.js /path/to/pre-pend/to/your/track/locations/
```

### Thanks

This package wouldn't be possible without the [seratojs]([url](https://github.com/bcollazo/seratojs)) library written by bcollazo.

### Warranty Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


