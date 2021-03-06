module.exports = function () {
    $.gulp.task('smart-grid', () => {
        var settings = {
            outputStyle: 'scss', /* less || scss || sass || styl */
            columns: 12, /* number of grid columns */
            offset: '10px', /* gutter width px || % */
            mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
            container: {
                maxWidth: '980px', /* max-width оn very large screen */
                fields: '10px' /* side fields */
            },
            breakPoints: {
                lg: {
                    width: '1100px', /* -> @media (max-width: 1100px) */
                },
                md: {
                    width: '980px'
                },
                sm: {
                    width: '780px',
                    fields: '15px' /* set fields only if you want to change container.fields */
                },
                xs: {
                    width: '560px'
                }
                /*
                We can create any quantity of break points.

                some_name: {
                    width: 'Npx',
                    fields: 'N(px|%|rem)',
                    offset: 'N(px|%|rem)'
                }
                */
            }
        };

        $.smartgrid('./src/scss', settings);
    });

};

