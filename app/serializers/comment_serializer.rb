class CommentSerializer < ActiveModel::Serializer
  attributes :comment_chat
belongs_to :user
belongs_to :ticket

end
