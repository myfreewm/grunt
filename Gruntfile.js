

module.exports = function(grunt){
    
    // 配置任务
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify:{
            
            options:{
                banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n',
                compress:{
                    drop_console:true
                }
            },
            my_target:{
                options:{
                    sourceMap:true,
                    sourceMapName:'path/to/sourceMap.map',
                    beautify:true
                },
                files:{

                    'dest/<%= pkg.name %>.min.js':['src/*.js']
                }
            }
        },
        clean:['src/a.js'],
        jshint:{
            all:['src/*js']
        },
        concat:{
            options:{
                separator:';',
            },
            dist:{
                
                src:['src/b.js','src/index.js'],
                dest:'dest/concat.js'
            }
        }
    });
    // 加载插件
    // js 压缩合并
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 删除文件
    grunt.loadNpmTasks('grunt-contrib-clean');
    // 代码检查
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // 代码合并
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 注册任务
    grunt.registerTask('default',['uglify','jshint','concat']);
}
