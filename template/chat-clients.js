/**
 * Load the list of chat room users.
 */

var chatRoomUrl = 'http://chat.wasabistudio.ca/';
jQuery(function() {
	jQuery('#chatroom-user-list').each(function() {
		var list = jQuery(this);
		jQuery.ajax({
			url: chatRoomUrl + 'client/list',
			success: function(clients) {
				if (!clients.length) {
					list.html('<em>無</em>');
					return;
				}
				for (var i = 0, length = clients.length; i < length; i++) {
					list.append(clients[i].username);
					if ((i + 1) < length) {
						list.append(', ');
					}
				}
			},
			error: function() {
				list.html('<em>無</em>');
				console.log('Failed to load list of clients.');
			},
			dataType: 'json'
		});
	});
});

