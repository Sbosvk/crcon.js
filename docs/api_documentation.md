# API Module Documentation

## Overview

This module provides a wrapper around various API endpoints, facilitating interaction with the backend. Each method corresponds to an API endpoint and uses the fetch API to perform HTTP requests.

This version is fully compatible with the CRCON v10 API, ensuring all current features and endpoints are supported.

## Constructor

### `constructor(baseURL, config = {})`

#### **Parameters**

- **`baseURL`** (string): The base URL of the API.
- **`config`** (object, optional): Configuration options for the API instance.
  - **`token`** (string, optional): A bearer token for authentication. If set, this token will be used for all API calls.

## Methods

### **Admin Management**

#### `get_admin_groups`
Fetches the list of admin groups.

**Returns:** `Promise<any>`

---

#### `get_admin_ids`
Fetches the list of admin IDs.

**Returns:** `Promise<any>`

---

#### `get_admin_pings_discord_webhooks_config`
Fetches the configuration for admin ping Discord webhooks.

**Returns:** `Promise<any>`

---

#### `get_online_mods`
Fetches the list of online moderators.

**Returns:** `Promise<any>`

---

#### `get_ingame_mods`
Fetches the list of in-game moderators.

**Returns:** `Promise<any>`

---

#### `add_admin`
Adds a new admin.

**Parameters:**
- `player_id` (string, optional): The player ID of the new admin.
- `role` (string, optional): The role to assign to the new admin.
- `description` (string, optional): A description for the new admin.

**Returns:** `Promise<any>`

---

#### `remove_admin`
Removes an admin by player ID.

**Parameters:**
- `player_id` (string, optional): The player ID of the admin to be removed.

**Returns:** `Promise<any>`

---

#### `get_all_standard_message_config`
Fetches all standard message configurations.

**Returns:** `Promise<any>`

---

#### `get_all_discord_webhooks_config`
Fetches all Discord webhooks configuration.

**Returns:** `Promise<any>`

---

#### `describe_admin_pings_discord_webhooks_config`
Fetches configuration details for admin ping Discord webhooks.

**Returns:** `Promise<any>`

---

#### `validate_admin_pings_discord_webhooks_config`
Validates configuration for admin ping Discord webhooks.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration object to validate.
- `reset_to_default` (boolean, optional): If true, resets to default.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

### **Logs**

#### `get_audit_logs`
Fetches the audit logs.

**Returns:** `Promise<any>`

---

#### `get_structured_logs`
Fetches structured logs with filters.

**Parameters:**
- `since_min_ago` (number, optional): Logs from the past X minutes.
- `filter_action` (string, optional): Action to filter logs by.
- `filter_player` (string, optional): Player to filter logs by.

**Returns:** `Promise<any>`

---

#### `get_audit_logs_autocomplete`
Fetches autocomplete suggestions for audit logs.

**Returns:** `Promise<any>`

---

#### `get_historical_logs`
Fetches historical logs based on filters.

**Parameters:**
- `player_name` (string, optional): The name of the player to filter logs.
- `player_id` (string, optional): The ID of the player to filter logs.
- `action` (string, optional): The action type to filter logs.
- `limit` (number, optional): The number of logs to retrieve.
- `from_` (string, optional): Start date/time for logs retrieval.
- `till` (string, optional): End date/time for logs retrieval.
- `time_sort` (string, optional): Sort order of logs (`asc` or `desc`).
- `exact_player_match` (boolean, optional): Whether to match the player name exactly.
- `exact_action` (boolean, optional): Whether to match the action exactly.
- `server_filter` (string, optional): Filter logs by server.

**Returns:** `Promise<any>`

---

#### `get_historical_logs_csv`
Downloads historical logs as a CSV file.

**Returns:** `Promise<any>`

---

#### `validate_audit_discord_webhooks_config`
Validates audit webhook configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to validate.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

### **Auto Moderation**

#### `get_auto_broadcasts_config`
Fetches the configuration for auto broadcasts.

**Returns:** `Promise<any>`

---

#### `get_auto_mod_level_config`
Fetches the auto moderation level configuration.

**Returns:** `Promise<any>`

---

#### `get_auto_mod_no_leader_config`
Fetches the auto moderation no leader configuration.

**Returns:** `Promise<any>`

---

#### `get_auto_mod_seeding_config`
Fetches the auto moderation seeding configuration.

**Returns:** `Promise<any>`

---

#### `get_auto_mod_solo_tank_config`
Fetches the auto moderation solo tank configuration.

**Returns:** `Promise<any>`

---

#### `get_auto_settings`
Fetches the current auto settings.

**Returns:** `Promise<any>`

---

#### `get_autobalance_enabled`
Fetches the current status of auto balance.

**Returns:** `Promise<any>`

---

#### `get_autobalance_threshold`
Fetches the auto balance threshold.

**Returns:** `Promise<any>`

---

#### `get_idle_autokick_time`
Fetches the idle autokick time.

**Returns:** `Promise<any>`

---

#### `get_vac_game_bans_config`
Fetches the configuration for VAC game bans.

**Returns:** `Promise<any>`

---

#### `set_auto_mod_level_config`
Sets the auto moderation level configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to set.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

#### `set_auto_mod_no_leader_config`
Sets the auto moderation no leader configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to set.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

#### `set_auto_mod_seeding_config`
Sets the auto moderation seeding configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `user_config` (object, optional): Configuration to set.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

#### `set_auto_mod_solo_tank_config`
Sets the auto moderation solo tank configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to set.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

#### `set_autobalance_enabled`
Enables or disables auto balance.

**Parameters:**
- `value` (boolean, optional): The new status of auto balance.

**Returns:** `Promise<any>`

---

#### `set_autobalance_threshold`
Sets the auto balance threshold.

**Parameters:**
- `max_diff` (number, optional): The maximum difference allowed.

**Returns:** `Promise<any>`

---

#### `describe_auto_broadcasts_config`
Fetches configuration details for auto broadcasts.

**Returns:** `Promise<any>`

---

#### `describe_auto_mod_level_config`
Fetches configuration details for auto moderation levels.

**Returns:** `Promise<any>`

---

#### `validate_auto_mod_level_config`
Validates auto moderation level configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to validate.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

#### `validate_auto_broadcasts_config`
Validates auto broadcast configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to validate.
- `reset_to_default` (boolean, optional): Reset to default if true.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

### **Bans & Blacklists**

#### `get_ban`
Fetches ban information for a specific player.

**Parameters:**
- `player_id` (string, optional): The ID of the player to fetch ban info for.

**Returns:** `Promise<any>`

---

#### `get_bans`
Fetches the list of all bans.

**Returns:** `Promise<any>`

---

#### `get_blacklist`
Fetches blacklist information for a specific ID.

**Parameters:**
- `blacklist_id` (string, optional): The ID of the blacklist to fetch.

**Returns:** `Promise<any>`

---

#### `get_blacklist_records`
Fetches blacklist records based on filters.

**Parameters:**
- `player_id` (string, optional): The player ID to filter records.
- `reason` (string, optional): The reason to filter records.
- `blacklist_id` (string, optional): The blacklist ID to filter records.
- `exclude_expired` (boolean, optional): Whether to exclude expired records.
- `page_size` (number, optional): The number of records per page.
- `page` (number, optional): The page number to retrieve.

**Returns:** `Promise<any>`

---

#### `get_blacklists`
Fetches the list of all blacklists.

**Returns:** `Promise<any>`

---

#### `temp_ban`
Issues a temporary ban.

**Parameters:**
- `player_name` (string, optional): The name of the player to ban.
- `player_id` (string, optional): The ID of the player to ban.
- `duration_hours` (number, optional): The duration of the ban in hours.
- `reason` (string, optional): The reason for the ban.
- `by` (string, optional): The name of the admin issuing the ban.

**Returns:** `Promise<any>`

---

#### `perma_ban`
Issues a permanent ban.

**Parameters:**
- `player_name` (string, optional): The name of the player to ban.
- `player_id` (string, optional): The ID of the player to ban.
- `reason` (string, optional): The reason for the ban.
- `by` (string, optional): The name of the admin issuing the ban.

**Returns:** `Promise<any>`

---

#### `remove_temp_ban`
Removes a temporary ban by player ID.

**Parameters:**
- `player_id` (string, optional): The ID of the player to unban.

**Returns:** `Promise<any>`

---

#### `remove_perma_ban`
Removes a permanent ban by player ID.

**Parameters:**
- `player_id` (string, optional): The ID of the player to unban.

**Returns:** `Promise<any>`

---

#### `unban`
Unbans a player by player ID.

**Parameters:**
- `player_id` (string, optional): The ID of the player to unban.

**Returns:** `Promise<any>`

---

#### `unblacklist_player`
Removes a player from the blacklist.

**Parameters:**
- `player_id` (string, optional): The ID of the player to remove from the blacklist.

**Returns:** `Promise<any>`

---

### **Player Management**

#### `get_players`
Fetches the list of all players.

**Returns:** `Promise<any>`

---

#### `get_player_info`
Fetches information about a specific player.

**Parameters:**
- `player_name` (string, optional): The name of the player.
- `can_fail` (boolean, optional): Indicates if the request can fail.

**Returns:** `Promise<any>`

---

#### `get_detailed_player_info`
Fetches detailed information about a specific player.

**Parameters:**
- `player_name` (string, optional): The name of the player to fetch details for.

**Returns:** `Promise<any>`

---

#### `get_detailed_players`
Fetches detailed information about all players.

**Returns:** `Promise<any>`

---

#### `get_player_profile`
Fetches the profile of a specific player, including session details.

**Parameters:**
- `player_id` (string, optional): The ID of the player to fetch the profile for.
- `num_sessions` (number, optional): The number of sessions to include in the profile.

**Returns:** `Promise<any>`

---

#### `get_playerids`
Fetches player IDs with an optional dictionary format.

**Parameters:**
- `as_dict` (boolean, optional): Whether to return the results as a dictionary.

**Returns:** `Promise<any>`

---

#### `get_players_history`
Fetches the history of players based on filters.

**Parameters:**
- `page` (number, optional): The page number to retrieve.
- `page_size` (number, optional): The number of records per page.
- `last_seen_from` (string, optional): Start date/time for filtering by last seen.
- `last_seen_till` (string, optional): End date/time for filtering by last seen.
- `player_id` (string, optional): Filter by player ID.
- `player_name` (string, optional): Filter by player name.
- `blacklisted` (boolean, optional): Filter by blacklist status.
- `is_watched` (boolean, optional): Filter by watchlist status.
- `exact_name_match` (boolean, optional): Whether to match the player name exactly.
- `ignore_accent` (boolean, optional): Whether to ignore accents in name matching.
- `flags` (string, optional): Filter by player flags.
- `country` (string, optional): Filter by player country.

**Returns:** `Promise<any>`

---

#### `get_temp_bans`
Fetches the list of temporary bans.

**Returns:** `Promise<any>`

---

#### `flag_player`
Flags a player with a specific label.

**Parameters:**
- `player_id` (string, optional): The player ID to flag.
- `flag` (string, optional): The flag to assign.
- `player_name` (string, optional): The player name (optional if player_id is provided).
- `comment` (string, optional): A comment related to the flagging.

**Returns:** `Promise<any>`

---

#### `kick`
Kicks a player from the game.

**Parameters:**
- `player_name` (string, optional): The name of the player to kick.
- `reason` (string, optional): The reason for the kick.
- `by` (string, optional): The name of the admin issuing the kick.
- `player_id` (string, optional): The ID of the player to kick.

**Returns:** `Promise<any>`

---

#### `message_player`
Sends a message to a player.

**Parameters:**
- `player_name` (string, optional): The name of the player to message.
- `player_id` (string, optional): The ID of the player to message.
- `message` (string, optional): The message content.
- `by` (string, optional): The name of the admin sending the message.
- `save_message` (boolean, optional): Whether to save the message.

**Returns:** `Promise<any>`

---

#### `post_player_comment`
Posts a comment for a player.

**Parameters:**
- `player_id` (string, optional): The ID of the player to comment on.
- `comment` (string, optional): The content of the comment.
- `by` (string, optional): The name of the admin posting the comment.

**Returns:** `Promise<any>`

---

#### `punish`
Punishes a player.

**Parameters:**
- `player_name` (string, optional): The name of the player to punish.
- `reason` (string, optional): The reason for the punishment.
- `by` (string, optional): The name of the admin issuing the punishment.

**Returns:** `Promise<any>`

---

#### `switch_player_now`
Immediately switches a player to another team.

**Parameters:**
- `player_name` (string, optional): The name of the player to switch.

**Returns:** `Promise<any>`

---

#### `switch_player_on_death`
Switches a player to another team upon their death.

**Parameters:**
- `player_name` (string, optional): The name of the player to switch.
- `by` (string, optional): The name of the admin issuing the switch.

**Returns:** `Promise<any>`

---

#### `watch_player`
Adds a player to the watchlist.

**Parameters:**
- `player_id` (string, optional): The ID of the player to watch.
- `reason` (string, optional): The reason for watching.
- `by` (string, optional): The name of the admin issuing the watch.
- `player_name` (string, optional): The name of the player to watch.

**Returns:** `Promise<any>`

---

#### `unwatch_player`
Removes a player from the watchlist.

**Parameters:**
- `player_id` (string, optional): The ID of the player to unwatch.

**Returns:** `Promise<any>`

---

### **VIP Management**

#### `get_vip_ids`
Fetches the list of VIP IDs.

**Returns:** `Promise<any>`

---

#### `get_expired_vip_config`
Fetches the configuration for expired VIPs.

**Returns:** `Promise<any>`

---

#### `get_real_vip_config`
Fetches the real VIP configuration.

**Returns:** `Promise<any>`

---

#### `get_vip_slots_num`
Fetches the number of VIP slots.

**Returns:** `Promise<any>`

---

#### `get_vips_count`
Fetches the total count of VIPs.

**Returns:** `Promise<any>`

---

#### `add_vip`
Adds a new VIP.

**Parameters:**
- `player_id` (string, optional): The player ID to be added as VIP.
- `description` (string, optional): A description for the VIP.
- `expiration` (string, optional): The expiration date for the VIP status.

**Returns:** `Promise<any>`

---

#### `remove_vip`
Removes a VIP by player ID.

**Parameters:**
- `player_id` (string, optional): The player ID of the VIP to be removed.

**Returns:** `Promise<any>`

---

#### `upload_vips`
Uploads VIP configurations to the server.

**Returns:** `Promise<any>`

---

#### `upload_vips_result`
Fetches the result of the VIP upload.

**Returns:** `Promise<any>`

---

#### `download_vips`
Downloads VIP configurations from the server.

**Returns:** `Promise<any>`

---

### **Server Settings and Status**

#### `get_server_settings`
Fetches the server settings.

**Returns:** `Promise<any>`

---

#### `get_connection_info`
Fetches the connection information of the server.

**Returns:** `Promise<any>`

---

#### `get_version`
Fetches the current version of the server or API.

**Returns:** `Promise<any>`

---

#### `get_status`
Fetches the current status of the server.

**Returns:** `Promise<any>`

---

#### `get_current_map_sequence`
Fetches the current map sequence.

**Returns:** `Promise<any>`

---

#### `get_camera_notification_config`
Fetches the camera notification configuration.

**Returns:** `Promise<any>`

---

#### `set_server_name`
Sets the server name.

**Parameters:**
- `name` (string, optional): The new name of the server.

**Returns:** `Promise<any>`

---

#### `set_map`
Sets the current map to the specified map name.

**Parameters:**
- `map_name` (string, optional): The name of the map to set.

**Returns:** `Promise<any>`

---

#### `set_map_shuffle_enabled`
Enables or disables map shuffle.

**Parameters:**
- `enabled` (boolean, optional): The status of map shuffle.

**Returns:** `Promise<any>`

---

#### `set_team_switch_cooldown`
Sets the cooldown time for team switches.

**Parameters:**
- `minutes` (number, optional): The cooldown time in minutes.

**Returns:** `Promise<any>`

---

#### `set_max_ping_autokick`
Sets the maximum ping threshold for autokick.

**Parameters:**
- `max_ms` (number, optional): The maximum ping in milliseconds.

**Returns:** `Promise<any>`

---

#### `set_votekick_autotoggle_config`
Sets the vote kick auto toggle configuration.

**Parameters:**
- `by` (string, optional): User initiating the request.
- `config` (object, optional): Configuration to apply.
- `reset_to_default` (boolean, optional): If true, resets to default.
- `kwargs` (object, optional): Additional arguments.

**Returns:** `Promise<any>`

---

#### `clear_cache`
Clears the server cache.

**Returns:** `Promise<any>`

---

#### `reconnect_gameserver`
Reconnects the game server.

**Returns:** `Promise<any>`

---

#### `run_raw_command`
Executes a raw command on the server.

**Returns:** `Promise<any>`

---

### **Game Settings and Status**

#### `get_gamestate`
Fetches the current game state.

**Returns:** `Promise<any>`

---

#### `get_date_scoreboard`
Fetches the scoreboard data for a specified date range.

**Parameters:**

- `start` (string, optional): The start date of the range.
- `end` (string, optional): The end date of the range.

**Returns:** `Promise<any>`

---

#### `get_live_game_stats`
Fetches live game statistics.

**Returns:** `Promise<any>`

---

#### `get_queue_length`
Fetches the current queue length.

**Returns:** `Promise<any>`

---

#### `get_round_time_remaining`
Fetches the remaining time for the current round in seconds.

**Returns:** `Promise<any>`

---

#### `get_team_objective_scores`
Fetches team objective scores.

**Returns:** `Promise<any>`

---

#### `get_team_view`
Fetches the team view.

**Returns:** `Promise<any>`

---
