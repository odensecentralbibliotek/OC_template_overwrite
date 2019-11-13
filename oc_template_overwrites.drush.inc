<?php
function oc_template_overwrites_drush_command() {
  $items['oc-template-overwrites-add-image-alts-field'] = array(
    'description' => 'Install ADHL ting object field.',
  );
  $items['oc-template-overwrites-fix-deleted-status'] = array(
    'description' => '',
  );
  return $items;
}

function drush_oc_template_overwrites_fix_deleted_status() {
  $nodes = node_load_multiple(array(), array('isDeleted' => 1));
  foreach($nodes as $node)
  {
    $node->status = 0;
    node_save($node);
  }
  $files = file_load_multiple(array(), array('isDeleted' => 1));

  if (count($files) > 0) {
    foreach ($files as $file) {
      $file->status = 0;
      file_save($file);
    }
  }
}
function drush_oc_template_overwrites_add_image_alts_field() {

    drush_log(dt('Adding alt descriptions for missing images..'), 'ok');
    
    //Get all images without alt text    
    $query = new EntityFieldQuery();
  $result = $query
    ->entityCondition('entity_type', 'file')
    ->propertyCondition('type', 'image')
    ->propertyCondition('status', NODE_PUBLISHED)
    ->execute();
    $updated_count = 0;
    // Result is returned as a iterable object that returns a stdClass object on each iteration
    foreach ($result['file'] as $record) {
        if($record->type == "image")
        {
          
          $exists = db_query('SELECT entity_id FROM field_data_field_file_image_alt_text WHERE entity_id = ' . $record->fid)->fetchAll();
          //echo var_dump($exists);
          if(sizeof($exists) == 0)
          {
            drush_log('No Meta found for: ' .$record->fid, 'ok');
            db_insert('field_data_field_file_image_alt_text') // Table name no longer needs {}
              ->fields(array(
                'entity_type' => 'file',
                'bundle' => 'image',
                'deleted' => 0,
                'entity_id' => $record->fid,
                'revision_id' => $record->fid,
                'language' => 'und',
                'delta' => 0,
                'field_file_image_alt_text_value' => "Dekorativt billede",
                'field_file_image_alt_text_format' => null,
              ))
              ->execute();
              $updated_count +=1;
          }
        }
        else{
            echo var_dump($result);
            exit(1);
        }

    }

    drush_log('Updated ' . $updated_count . " images..", 'ok');
  
}