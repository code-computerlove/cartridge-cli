var chai = require('chai');
var os = require('os');
var fs = require('fs-extra');
var path = require('path');

var fileTemplater =  require('../../bin/fileTemplater')();

chai.use(require('chai-fs'));
chai.should();

var TEST_TEMP_DIR = path.join(os.tmpdir(), 'file-templater');

function changeToOsTempDir() {
    fs.ensureDirSync(TEST_TEMP_DIR);

    process.chdir(TEST_TEMP_DIR);
}

xdescribe('As a user of the file templater module', function() {
    before(changeToOsTempDir);

    describe('When templating one file', function() {

        it('should be correctly template the contents', function() {

        })

    })
})