shared void shareSource() {
    String weburl;
    dynamic {
        if (selectedGist exists) {
            weburl = window.location.origin + pagepath + "?gist=" + selectedGist.data.id;
        } else {
            weburl = window.location.origin + pagepath + "?sample=" + selectedExample;
        }
    }
    value html = StringBuilder().append("<div style=\"padding: 10px\" class=\"ceylon_share_links\">")
            .append("Direct link to this page showing the current code:<br>")
            .append("<div><input type=\"text\" value=\"``weburl``\" readonly onclick=\"this.select();\">")
            .append("<a href=\"``weburl``\" target=\"share_webide\"><i class=\"fa fa-external-link\"></i></a></div>");
    dynamic {
        if (selectedGist exists) {
            String githuburl = selectedGist.data.html_url;
            html.append("<br><br>Link to GitHub Gist where the current code is stored:<br>")
                .append("<div><input type=\"text\" value=\"``githuburl``\" readonly onclick=\"this.select();\">")
                .append("<a href=\"``githuburl``\" target=\"share_github\"><i class=\"fa fa-external-link\"></i></a></div>");
        }
        html.append("</div>");
        jQuery("#tb_all_main_toolbar_item_share").w2overlay(html.string);
    }
}
