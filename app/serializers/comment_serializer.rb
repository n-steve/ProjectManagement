class CommentSerializer < ActiveModel::Serializer
  attributes :comment_chat,:user_id,:ticket_id
belongs_to :user
belongs_to :ticket

end
