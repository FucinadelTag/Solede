<h3>
    <%= link_to(results[0].getText('blog.title'), '/preview_blog/view/?id='+ results[0].id) %>
</h3>
<h6 class="subheader blog-metadata">Written by <%= results[0].getText('blog.author') %> <%= results[0].getDate('blog.date') %>.</h6>

<div class="addthis_native_toolbox"></div>

<p class="abstract">
    <%= results[0].getText('blog.abstract') %>
</p>

<img src="<%= results[0].getImageView('blog.image', 'wide').url %>" class="padding" alt="<%= results[0].getText('blog.title') %>" />

<%= results[0].getHtml('blog.body') %>